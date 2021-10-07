import { put, takeLatest } from 'redux-saga/effects';
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













//stop function

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
    // yield takeLatest('LOGOUT', postItems);
}

export default shelfSaga;