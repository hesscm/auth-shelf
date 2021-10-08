import { combineReducers } from "redux";
const ItemsList = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    ItemsList,
}); 