import {createStore, combineReducers} from 'redux';

// const ADD_PRODUCT = 'ADD_PRODUCT'
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const total = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const entities = (state = 0, action) => {
    return state;
}

const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {...state, }
            break;
    
        default:
            break;
    }
}


// lesson 12 time 00:29:02