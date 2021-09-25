import { createContext } from 'react';
import UiStore from './uiStore';

const uiStore = new UiStore();

export default createContext({ uiStore });
