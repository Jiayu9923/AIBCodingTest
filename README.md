# AIBCodingTest

Below are the instructions to run and test the coding tasks in this project.

## Question 1

Navigate to the corresponding directory:
```
cd Q1
```

Once all dependencies have been installed:
```
node internetCheck.js
```

Then enter the URL to check the internet connection.


## Question 2

Navigate to the corresponding directory:
```
cd ..
cd Q2
npm install
```

Once all dependencies have been installed, open one terminal to run the server:
```
node server.js
```

Then open another terminal:
```
node fetchCategories.js
```

Or you can check it through Postman.


## Question 3

```
category-tree-select/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── TreeSelectComponent.js
│   ├── hooks/
│   │   └── useFetchCategories.js
│   ├── store/
│   │   ├── actions.js
│   │   ├── actionTypes.js
│   │   ├── reducers.js
│   │   ├── sagas.js
│   │   └── store.js
│   ├── App.js
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

Open one terminal to run the server in Q2:
```
cd ../Q2
node server.js
```

Navigate to the corresponding directory:
```
cd ..
cd Q3
cd category-tree-select
npm install
```

Once all dependencies have been installed:
```
npm start
```