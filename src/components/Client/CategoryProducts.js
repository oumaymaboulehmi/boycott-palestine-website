import '../../Assets/css/SearchAll.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { FaSearch, FaShare, FaArrowLeft } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';


const brands = [
    { name: 'Ford', image: '' },
    { name: 'Hyundai', image: '' },
    { name: 'Jaguar', image: '' },
    // Add other brands with appropriate images
];

const CategoryProducts = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const brandsPerPage = 6;

    const indexOfLastBrand = currentPage * brandsPerPage;
    const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
    const currentBrands = brands.slice(indexOfFirstBrand, indexOfLastBrand);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(brands.length / brandsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (brand) => {
        setSelectedBrand(brand);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedBrand(null);
    };

    const handleShare = () => {
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied to clipboard!');
        });
    };

    return (
        <div className="container2">
            <div className="header">
                <button className="back-button" onClick={() => navigate(-1)}><FaArrowLeft /> Back</button>
                <input type="text" placeholder="Search brands" className="search-input" />
                <button className="search-button"><FaSearch /></button>
                <button className="share-button" onClick={handleShare}><FaShare /> Share</button>
            </div>
            <div className="social-media">
                <p>Support our work by following us:</p>
                <div className="social-icons">
                    <FaFacebook className="icon facebook" />
                    <FaInstagram className="icon instagram" />
                    <FaTiktok className="icon tiktok" />
                </div>
            </div>
            <div className="brands-list">
                {currentBrands.map((brand, index) => (
                    <div key={index} className="brand-item">
                        <img src={brand.image} alt={brand.name} className="brand-image" />
                        <span className="brand-name">{brand.name}</span>
                        <button className="why-button" onClick={() => openModal(brand)}>Why?</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={number === currentPage ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === pageNumbers.length}
                >
                    &gt;
                </button>
            </div>
            <Modal show={showModal} onClose={closeModal} brand={selectedBrand} />
        </div>
    );
}

export default CategoryProducts;
