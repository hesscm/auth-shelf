import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//generator get function start here














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
        yield put({ type: 'FETCH_SHELF '});
    } catch (error) {
        console.log('error in add item - shelf.saga.js:', error);
    }
}

//stop function

function* shelfSaga() {
    // yield takeLatest('LOGIN', getItems);
    yield takeEvery('ADD_ITEM', addItem);
}

export default shelfSaga;