import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/Client/Home';
import SearchAllPage from '../components/Client/SearchAll';
import CategoryProducts from '../components/Client/CategoryProducts';
import Categorie from '../components/Client/Categorie';
import SomethingMissing from '../components/Client/Something';
import ProductScannerPage from '../components/Client/ScannerPage'; // Assurez-vous que le composant est correctement importé

const ClientLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search-all" element={<SearchAllPage />} />
        <Route path="categorie" element={<Categorie />} />
        <Route path="categorie/:category" element={<CategoryProducts />} />
        <Route path="scan" element={<ProductScannerPage />} /> {/* Utilisation du composant correct pour le scan */}
        <Route path="something" element={<SomethingMissing />} />
      </Routes>
    </div>
  );
};

export default ClientLayout;
