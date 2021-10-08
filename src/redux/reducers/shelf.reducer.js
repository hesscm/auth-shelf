import { combineReducers } from "redux";
const ItemsList = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF':
            return action.payload;
        default:
            return state;
    }
};

const UserItemsList = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_SHELF':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    ItemsList,
    UserItemsList
}); 