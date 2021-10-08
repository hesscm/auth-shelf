import { put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';


//generator get function start here
function* fetchShelf() {
    try {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    }
    const response = yield axios.get('/api/shelf', config);

    yield put({ type: 'SET_SHELF', payload: response.data });

    } catch (error) {
        console.log('Shelf get request failed', error);
    } 
};

//stop function



//generator post function start here

function* addItem(action) {
    try {
        console.log('in addItem function. Action is:', action);
        const item = action.payload;
        yield axios({
            method: 'POST',
            url: '/shelf/',
            data: action.payload
        });
        yield put({ type: 'SET_SHELF' });
    } catch (error) {
        console.log('error in add item - shelf.saga.js:', error);
    }
}

//generator delete function starts HERE

function* deleteItem(action) {
    try {
        console.log('passed in ACTION (id) - id is:', action.payload);
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({ type: 'SET_SHELF' });
    } catch (error) {
        console.log('error in delete in shelf.saga.js:', error)
    }
}


//stop delete function


//stop function

function* shelfSaga() {
    yield takeEvery('FETCH_SHELF', fetchShelf);
    yield takeEvery('ADD_ITEM', addItem);
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default shelfSaga;