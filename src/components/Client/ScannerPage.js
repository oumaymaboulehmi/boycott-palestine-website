import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner';
import ImageCarousel from './ImageCarousel';
import '../../Assets/css/ScanPage.css';

const ProductScannerPage = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [error, setError] = useState('');

  const handleScanSuccess = async (scannedCode) => {
    const response = await fetch(`http://localhost:5000/products?barcode=${scannedCode}`);
    const result = await response.json();

    if (result.length > 0) {
      setProductInfo(result[0]);
      setError('');
    } else {
      setProductInfo(null);
      setError('Oops, the product does not exist on our site now. We will check if it should be boycotted.');
    }
  };

  return (
    <div className="page-container">
      <div className="carousel-section">
        <ImageCarousel />
      </div>

      <div className="content-section">
        <div className={`info-section ${showScanner ? 'shift-left' : ''}`}>
          <h1 className="info-title">Why Boycott Israeli Products?</h1>
          <p className="info-text">Supporting Palestine through boycotts is a powerful way to contribute to the cause. Here, you can find information about products to avoid and why it's important. By boycotting Israeli products, you can make a statement against the occupation and support Palestinian rights. Your choice matters and can contribute to a greater impact.</p>
          <button className="scan-button" onClick={() => setShowScanner(true)}>Start Scanning</button>
        </div>

        {showScanner && (
          <div className="scanner-section show">
            <BarcodeScanner onScanSuccess={handleScanSuccess} />

            {productInfo && (
              <div className="product-info-card">
                <img src={productInfo.brandImage} alt={productInfo.name} className="product-image" />
                <h2>{productInfo.name}</h2>
                <p><strong>Why Boycott:</strong> {productInfo.whyBoycott}</p>
                <p><strong>Alternative:</strong> {productInfo.alternative}</p>
              </div>
            )}

            {error && (
              <div className="error-message">
                <p>{error}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductScannerPage;
