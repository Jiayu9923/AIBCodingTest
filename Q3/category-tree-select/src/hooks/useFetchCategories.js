import { useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../store/actions';

const useFetchCategories = () => {
    const dispatch = useDispatch();

    const fetchCategories = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8080/categories');
            dispatch(fetchCategoriesSuccess(response.data));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error.message));
        }
    }, [dispatch]);

    return fetchCategories;
};

export default useFetchCategories;
