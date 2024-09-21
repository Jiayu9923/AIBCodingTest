import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_CATEGORIES_SAGA,
} from './actionTypes';
import {
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
} from './actions';

// Worker Saga: Fetch categories from API
function* fetchCategoriesSagaWorker() {
    try {
        const response = yield call(axios.get, 'http://localhost:8080/categories');
        yield put(fetchCategoriesSuccess(response.data));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}

// Watcher Saga: Watches for FETCH_CATEGORIES_SAGA action
function* watchFetchCategoriesSaga() {
    yield takeLatest(FETCH_CATEGORIES_SAGA, fetchCategoriesSagaWorker);
}

export default watchFetchCategoriesSaga;