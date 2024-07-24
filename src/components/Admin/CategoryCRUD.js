import React from 'react';
import { Outlet } from 'react-router-dom';


const CategoryCRUD= () => {
    return (
        <div className="category-crud">
            <h2>Category Management</h2>
            <Outlet />
        </div>
    );
}

export default CategoryCRUD;