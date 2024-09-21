// const express = require('express');
// const fs = require('fs');
// const path = require('path');
import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 8080;

// Use 'cors' middleware to allow requests from http://localhost:3000
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Function to convert flat array to tree
function buildCategoryTree(categories) {
    const categoryMap = {};

    // Initialize the map
    categories.forEach(category => {
        categoryMap[category.categoryId] = {
            ...category,
            children: []
        };
    });

    // Create the root node
    const root = {
        categoryId: "root",
        name: "Root Category",
        parent: null,
        children: []
    };
    categoryMap["root"] = root;

    // Build the tree
    categories.forEach(category => {
        const parentId = category.parent;
        if (parentId in categoryMap) {
            categoryMap[parentId].children.push(categoryMap[category.categoryId]);
        } else {
            console.warn(`Parent category ${parentId} not found for category ${category.categoryId}`);
        }
    });

    return root;
}

// Load categories from JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const categoriesFilePath = path.join(__dirname, '../categories.json');
let categories = [];

try {
    const data = fs.readFileSync(categoriesFilePath, 'utf-8');
    categories = JSON.parse(data);
} catch (err) {
    console.error('Error reading categories.json:', err);
    process.exit(1);
}

// Build the category tree
const categoryTree = buildCategoryTree(categories);

// Define the /categories endpoint
app.get('/categories', (req, res) => {
    res.json(categoryTree);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
