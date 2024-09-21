import {
    FETCH_CATEGORIES_SAGA,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_HOOK,
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

// Action to trigger fetching via custom hook
export const fetchCategoriesHook = () => ({
    type: FETCH_CATEGORIES_HOOK,
});