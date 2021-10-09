import { combineReducers } from "redux";
const ItemsList = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF':
            return action.payload;
        default:
            return state;
    }
};
//load the reducer with the user's list(this came from the saga put({type:...})
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
    UserItemsList //this is ready to be called in root reducer now. let's go back to UserShelfPage
}); 