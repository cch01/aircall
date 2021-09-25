import { action, makeAutoObservable } from 'mobx';

const pageList = ['/inbox', '/archives'];

class UiStore {
  constructor() {
    this.currentPage = '/inbox';
    this.enterAnimation = 'moveFromLeftFade';
    this.exitAnimation = 'moveToLeftFade';
    makeAutoObservable(this, { refreshParams: action });
  }

  refreshParams(onPathNotFound) {
    const currentRoute = window.location.pathname;
    const currentPageIndex = pageList.indexOf(currentRoute);

    if (currentPageIndex < 0) {
      onPathNotFound();
      return;
    }

    this.currentPage = currentRoute;

    if (currentPageIndex === 0) {
      this.enterAnimation = 'moveFromLeftFade';
      this.exitAnimation = 'moveToLeftFade';
      return;
    }

    this.enterAnimation = 'moveFromRightFade';
    this.exitAnimation = 'moveToRightFade';
  }
}

export default UiStore;
