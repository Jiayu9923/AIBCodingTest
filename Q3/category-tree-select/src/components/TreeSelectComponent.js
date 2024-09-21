import React from 'react';
import { TreeSelect } from 'antd';
import { useSelector } from 'react-redux';

const TreeSelectComponent = () => {
    const categories = useSelector((state) => state.categories);

    // Check if categories exist and have children
    if (!categories || Object.keys(categories).length === 0) {
        return <div>Loading... Please click the button...</div>;
    }

    // Convert the category tree to Ant Design's Tree Data structure
    const transformCategoriesToTreeData = (categoryNode) => {
        return {
            title: categoryNode.name,
            value: categoryNode.categoryId,
            key: categoryNode.categoryId,
            children: categoryNode.children.map(transformCategoriesToTreeData),
        };
    };

    const treeData = [transformCategoriesToTreeData(categories)];

    const onChange = (value) => {
        alert(`Selected Category ID: ${value}`);
    };

    return (
        <TreeSelect
            style={{ width: '100%' }}
            value={undefined}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={treeData}
            placeholder="Please select a category"
            treeDefaultExpandAll
            onChange={onChange}
        />
    );
};

export default TreeSelectComponent;
