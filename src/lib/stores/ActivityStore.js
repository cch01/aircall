import { observable, makeAutoObservable, action } from 'mobx';
import axios from 'axios';

class ActivityStore {
  constructor() {
    this.activities = []
    this.inBox = []
    this.archives = []
    makeAutoObservable(this);
    this.fetchActivities()
  }

  fetchActivities = async () => {
    const { data: res } = await axios.get('https://aircall-job.herokuapp.com/activities');
    this.activities = res;
    this.archives = this.activities.filter(activity => activity.is_archived)
    this.inBox = this.activities.filter(activity => !activity.is_archived)
  };
}

export default ActivityStore;
