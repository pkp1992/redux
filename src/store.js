import { createStore } from "redux";
import rootReducer from "./redusers/index";
import { devToolsEnhancer } from  'redux-devtools-extension';

const createAppStore = () => {
  // const store = createStore(
  //   rootReducer, /* preloadedState, */
  //   +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
  // );
  const store = createStore(
    rootReducer, /*  preloadedState , */ devToolsEnhancer());
  return store;
};

export default createAppStore;
