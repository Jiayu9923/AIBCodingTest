import {
    FETCH_CATEGORIES_SAGA,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
} from './actionTypes';

// Action to trigger Redux Saga to fetch categories
export const fetchCategoriesSaga = () => ({
    type: FETCH_CATEGORIES_SAGA,
});

// Action to handle successful fetch
export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
});

// Action to handle fetch failure
export const fetchCategoriesFailure = (error) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
});