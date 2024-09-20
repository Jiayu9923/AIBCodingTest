import fetch from 'node-fetch'; // ES Module import

const URL = 'http://localhost:8080/categories';

async function fetchCategoryTree() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const categoryTree = await response.json();
        console.log(JSON.stringify(categoryTree, null, 2));
    } catch (error) {
        console.error('Error fetching category tree:', error);
    }
}

fetchCategoryTree();
