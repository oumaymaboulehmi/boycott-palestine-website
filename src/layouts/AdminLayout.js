// AdminLayout.js

import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Admin/SideBar';
import Navbar from '../components/Admin/NavBar';
import Dashboard from '../components/Admin/Dashboard';
import ProductCRUD from '../components/Admin/ProductCRUD';
import AddProduct from '../components/Admin/AddProduct';
import ProductList from '../components/Admin/ProductList';
import Reviews from '../components/Admin/Reviews';
import CategoryCRUD from '../components/Admin/CategoryCRUD';
import AddCategory from '../components/Admin/AddCategory';
import CategoryList from '../components/Admin/CategoryList';

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="products" element={<ProductCRUD />}>
                            <Route path="add" element={<AddProduct />} />
                            <Route path="list" element={<ProductList />} />
                        </Route>
                        <Route path="categories" element={<CategoryCRUD />}>
                            <Route path="add" element={<AddCategory />} />
                            <Route path="list" element={<CategoryList />} />
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                        {/* Add other admin routes here */}
                    </Routes>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
