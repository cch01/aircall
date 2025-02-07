import { createContext } from 'react';
import ActivityStore from './activityStore';
import UiStore from './uiStore';

const uiStore = new UiStore();
const activityStore = new ActivityStore();

export default createContext({ uiStore, activityStore });
