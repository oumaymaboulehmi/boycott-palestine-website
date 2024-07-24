import React from 'react';
import '../../Assets/css/Modal.css';  // Correct path


const Modal = ({ show, onClose, brand }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>{brand.name}</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="modal-content">
                    <h3>Adidas Underwear Partnership</h3>
                    <p>
                        Adidas Underwear has partnered with <strong>Delta Galil Industries, Ltd.</strong> (DELT/Tel Aviv Stock Exchange), the global manufacturer and marketer of branded and private label apparel products for men, women, and children. <strong>Delta Galil Industries</strong> is an <strong>Israeli textile firm headquartered in Tel Aviv</strong>, with plants around the world.
                    </p>
                    <img src={brand.image} alt={brand.name} className="brand-image" />
                </div>
                <div className="modal-footer">
                    <button className="close-button" onClick={onClose}>FERMER</button>
                    <button className="source-button">VOIR LA SOURCE</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
