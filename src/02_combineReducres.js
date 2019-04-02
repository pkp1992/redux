import { createStore, combineReducers } from "redux";
import React, {PureComponent} from 'react'

// const ADD_PRODUCT = 'ADD_PRODUCT'
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const entities = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      return [...state, action.payload.id];
    default:
      return state;
  }
};

const total = (state = 0, action) => {
  switch (action.type) {
    case "ADD_USERS":
      return state + 1;
    case "REMOVE_ALL_USERS":
      return (state = 0);
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      return [...state, action.payload];
    case "REMOVE_ALL_USERS":
      return [];

    default:
      return state;
  }
};

const lection = (state = { a: 1, b: 2, c: 3 }, action) => state;

const rootReducer = combineReducers({
  entities,
  people: combineReducers({
    lection,
    total,
    users
  })
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

const addUsers = (id, name) => ({
  type: "ADD_USERS",
  payload: {
    id,
    name
  }
});
const removeUsers = () => ({
  type: "REMOVE_ALL_USERS"
});

store.dispatch(addUsers(1, "Kostia1"));
store.dispatch(addUsers(2, "Kostia2"));
store.dispatch(addUsers(3, "Kostia3"));
store.dispatch(addUsers(4, "Kostia4"));
// store.dispatch(removeUsers());

// lesson 12 time 00:29:02


export default class App extends PureComponent {
    state = store.getState();
    render(){
        console.log(this.state);
        return(
            <div>
                <p>{this.state.people.users[0].name}</p>
            </div>
        )
    }
}