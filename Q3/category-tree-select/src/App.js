// import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Space, Typography } from 'antd';
import 'antd/dist/reset.css';
import { fetchCategoriesSaga } from './store/actions';
import TreeSelectComponent from './components/TreeSelectComponent';

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();

  const handleFetchViaSaga = () => {
    dispatch(fetchCategoriesSaga());
  };

  return (
      <div style={{ padding: '50px' }}>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <Title level={2}>Category Tree Select</Title>
          <Space>
            <Button type="primary" onClick={handleFetchViaSaga}>
              Fetch Categories via Redux Saga
            </Button>
            <Button type="primary" >
              Fetch Categories via Custom Hook
            </Button>
          </Space>
          <TreeSelectComponent />
        </Space>
      </div>
  );
}

export default App;
