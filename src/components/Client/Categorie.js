import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/css/Categorie.css';
import { FaSearch, FaShare, FaArrowLeft } from 'react-icons/fa';

// Importez vos images ici ou utilisez des liens d'image directs
import car from '../../Assets/Images/car.png';
import fashion from '../../Assets/Images/fashion.png';
import cup from '../../Assets/Images/cup.png';
import makeup from '../../Assets/Images/make-up.png';
import drinks from '../../Assets/Images/drinks.png';
import bolt from '../../Assets/Images/bolt.png';
import canopy from '../../Assets/Images/canopy.png';
import loan from '../../Assets/Images/loan.png';
import homeAppliance from '../../Assets/Images/home-appliance.png';
import shoppingBag from '../../Assets/Images/shopping-bag.png';
import businessIdea from '../../Assets/Images/business-idea.png';
import conference from '../../Assets/Images/conference.png';
import groceryCart from '../../Assets/Images/grocery-cart.png';
import ai from '../../Assets/Images/ai.png';

const sectors = [
  { label: 'Car', image: car },
  { label: 'Clothing', image: fashion },
  { label: 'Coffee', image: cup },
  { label: 'Cosmetics', image: makeup },
  { label: 'Drinks', image: drinks },
  { label: 'Energy', image: bolt },
  { label: 'Entertainment', image: canopy },
  { label: 'Finance', image: loan },
  { label: 'Household', image: homeAppliance },
  { label: 'Luxury', image: shoppingBag },
  { label: 'Manufacturer', image: businessIdea },
  { label: 'Politics', image: conference },
  { label: 'Supermarket', image: groceryCart },
  { label: 'Technology', image: ai }
];

const Categorie = () => {
  const navigate = useNavigate();
  const [showShareContainer, setShowShareContainer] = useState(false);

  const toggleShareContainer = () => {
    setShowShareContainer(!showShareContainer);
  };

  return (
    <div className="container1">
      <div className="header-container">
        <button className="header-back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <input
          className="search-form-input"
          type="text"
          placeholder="Search brands"
        />
        <button className="header-search-button">
          <FaSearch /> Search
        </button>
        <button className="header-share-button" onClick={toggleShareContainer}>
          <FaShare /> Share
        </button>
      </div>
      <div className="social-media">
        <p>Support our work by following us:</p>
        <div className="social-icons">
          {/* Add your social media icons here */}
        </div>
      </div>
      <div className="icons-grid">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="icon-item"
            onClick={() => navigate(`/categorie/${sector.label.toLowerCase()}`)}
          >
            <img src={sector.image} alt={sector.label} />
            <p>{sector.label}</p>
          </div>
        ))}
      </div>
      {showShareContainer && (
        <div className="modal-overlay">
          <div className="share-container">
            <input
              type="text"
              value="https://boycott.thewitness.news/categories/car"
              readOnly
              className="share-link"
            />
            <input
              type="text"
              placeholder="Rechercher des personnes ou des e-mails"
              className="share-input"
            />
            <div className="share-options">
              <button>Outlook</button>
              <button>WhatsApp</button>
              <button>Facebook</button>
              <button>Mobile connecté</button>
              <button>OneNote</button>
            </div>
            <button className="close-button" onClick={toggleShareContainer}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorie;
