import { createStore } from "redux";

const reducer = (state = {}, action) => state

const store = createStore(reducer);


console.log(store.getState());

console.log(1);
