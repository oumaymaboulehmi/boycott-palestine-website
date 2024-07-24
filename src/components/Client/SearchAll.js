import '../../Assets/css/SearchAll.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { FaSearch, FaShare, FaArrowLeft } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const brands = [
    { name: '7up', image: 'path_to_image', description: 'Description for 7up' },
    { name: 'Acqua Panna', image: 'path_to_image', description: 'Description for Acqua Panna' },
    { name: 'Actimel', image: 'path_to_image', description: 'Description for Actimel' },
    { name: 'Activia', image: 'path_to_image', description: 'Description for Activia' },
    { name: 'Adidas', image: 'path_to_image', description: 'Description for Adidas' },
    { name: 'Aerin', image: 'path_to_image', description: 'Description for Aerin' },
    { name: 'Diet Coke', image: 'path_to_image', description: 'Description for Diet Coke' },
    { name: 'DKNY', image: 'path_to_image', description: 'Description for DKNY' },
    // Add more brands as needed
];

const SearchAll = () => {
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

    const handleAlternative = (brand) => {
        const brandItem = document.getElementById(`brand-${brand.name}`);
        brandItem.classList.toggle('flip');
    };

    return (
        <div className="search-all-container">
            <div className="search-all-header">
                <button className="search-all-back-button" onClick={() => navigate(-1)}>Back</button>
                <input type="text" placeholder="Search brands" className="search-all-search-input" />
                <button className="search-all-search-button"><FaSearch /></button>
                <button className="search-all-share-button" onClick={handleShare}><FaShare /> Share</button>
            </div>
            <div className="search-all-social-media">
                <p>Support our work by following us:</p>
                <div className="search-all-social-icons">
                    <FaFacebook className="search-all-icon search-all-facebook" />
                    <FaInstagram className="search-all-icon search-all-instagram" />
                    <FaTiktok className="search-all-icon search-all-tiktok" />
                </div>
            </div>
            <div className="search-all-brands-list">
                {currentBrands.map((brand, index) => (
                    <div id={`brand-${brand.name}`} key={index} className="search-all-brand-item">
                        <div className="search-all-brand-front">
                            <img src={brand.image} alt={brand.name} className="search-all-brand-image" />
                            <span className="search-all-brand-name">{brand.name}</span>
                            <p className="search-all-brand-description">{brand.description}</p>
                            <button className="search-all-why-button" onClick={() => openModal(brand)}>Why?</button>
                            <button className="search-all-alternative-button" onClick={() => handleAlternative(brand)}>Alternative</button>
                        </div>
                        <div className="search-all-brand-back">
                            <button className="search-all-back-arrow" onClick={() => handleAlternative(brand)}><FaArrowLeft /></button>
                            <p>Alternative Product Information for {brand.name}</p>
                            {/* Add alternative product information here */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="search-all-pagination">
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
                        className={number === currentPage ? 'search-all-active' : ''}
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

export default SearchAll;
