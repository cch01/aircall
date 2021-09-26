import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

class ActivityStore {
  constructor() {
    this.activities = [];
    this.inBox = [];
    this.archives = [];
    makeAutoObservable(this);
    this.fetchActivities();
  }

  async fetchActivities() {
    const { data: res } = await axios.get('https://aircall-job.herokuapp.com/activities');
    runInAction(() => {
      this.activities = res;
      this.archives = this.activities.filter((activity) => activity.is_archived);
      this.inBox = this.activities.filter((activity) => !activity.is_archived);
    });
  }

  async setArchiveState(id, state) {
    const { data } = await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, { is_archived: state });
    if (data) this.fetchActivities();
  }

  async archiveAll() {
    const result = await Promise.all(this.inBox.map(async ({ id }) => {
      const { data } = await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, { is_archived: true });
      return data;
    }));
    if (!result.some((val) => !val)) this.fetchActivities();
  }

  async unArchiveAll() {
    const result = await Promise.all(this.archives.map(async ({ id }) => {
      const { data } = await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, { is_archived: false });
      return data;
    }));
    if (!result.some((val) => !val)) this.fetchActivities();
  }
}

export default ActivityStore;
