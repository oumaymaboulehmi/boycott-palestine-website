import React from 'react';
import { Outlet } from 'react-router-dom';


const ProductCRUD = () => {
    return (
        <div className="product-crud">
            <h2>Product Management</h2>
            <Outlet />
        </div>
    );
}

export default ProductCRUD;
