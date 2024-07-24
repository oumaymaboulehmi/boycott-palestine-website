import React, { useState, useEffect } from 'react';
import '../../Assets/css/EditProductForm.css';
import { Html5QrcodeScanner } from 'html5-qrcode';

const EditProduct = ({ product, onClose }) => {
    const [productState, setProductState] = useState({
        title: '',
        description: '',
        brandImage: '', // URL or file
        barcode: '',
        category: '',
        price: '',
        publish: false,
        alternative: '' // New field for alternative product
    });

    const [errors, setErrors] = useState({});
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        if (product) {
            setProductState({
                title: product.title || '',
                description: product.description || '',
                brandImage: product.brandImage || '', // Ensure it's a URL or file
                barcode: product.barcode || '',
                category: product.category || '',
                price: product.price || '',
                publish: product.publish || false,
                alternative: product.alternative || ''
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductState(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        setProductState(prevState => ({
            ...prevState,
            brandImage: e.target.files[0] // Handle the file object
        }));
    };

    const validate = () => {
        let valid = true;
        const newErrors = {};

        // Title validation
        if (!productState.title.trim()) {
            valid = false;
            newErrors.title = 'Product title is required.';
        } else if (productState.title.length < 3) {
            valid = false;
            newErrors.title = 'Product title must be at least 3 characters long.';
        }

        // Description validation
        if (!productState.description.trim()) {
            valid = false;
            newErrors.description = 'Description is required.';
        } else if (productState.description.length < 10) {
            valid = false;
            newErrors.description = 'Description must be at least 10 characters long.';
        }

        // Brand Image validation
        if (productState.brandImage && typeof productState.brandImage === 'object') {
            // File validation
            if (!/\.(jpg|jpeg|png|gif)$/i.test(productState.brandImage.name)) {
                valid = false;
                newErrors.brandImage = 'Brand image must be a JPG, JPEG, PNG, or GIF file.';
            }
        } else if (!productState.brandImage) {
            valid = false;
            newErrors.brandImage = 'Brand image is required.';
        }

        // Barcode validation
        const barcodePattern = /^[0-9]{10,13}$/; // Only digits, 8-12 characters long
        if (!barcodePattern.test(productState.barcode)) {
            valid = false;
            newErrors.barcode = 'Invalid barcode. Must be 10-13 digits long.';
        }

        // Category validation
        if (!productState.category) {
            valid = false;
            newErrors.category = 'Category is required.';
        }

    
        // Alternative Product validation
        if (productState.alternative.trim() && productState.alternative.length < 3) {
            valid = false;
            newErrors.alternative = 'Alternative product must be at least 3 characters long.';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // Handle form submission
            // Convert file to base64 if needed or upload separately
            console.log('Updated product data:', productState);
            // Add API call here
            onClose();
        }
    };

    const startScan = () => {
        setScanning(true);
        const scanner = new Html5QrcodeScanner(
            "scanner-container", 
            { fps: 10, qrbox: { width: 250, height: 250 } }, 
            false
        );

        scanner.render(onScanSuccess, onScanFailure);

        function onScanSuccess(decodedText, decodedResult) {
            setProductState(prevState => ({ ...prevState, barcode: decodedText }));
            scanner.clear();
            setScanning(false);
        }

        function onScanFailure(error) {
            console.warn(`Code scan error = ${error}`);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content add-product">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Product Title:
                        <input type="text" name="title" value={productState.title} onChange={handleChange} />
                        {errors.title && <span className="error">{errors.title}</span>}
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={productState.description} onChange={handleChange} />
                        {errors.description && <span className="error">{errors.description}</span>}
                    </label>
                    <label>
                        Brand Image:
                        <input type="file" name="brandImage" onChange={handleFileChange} />
                        {errors.brandImage && <span className="error">{errors.brandImage}</span>}
                        {productState.brandImage && typeof productState.brandImage === 'string' && (
                            <div>
                                <img src={productState.brandImage} alt="Brand preview" style={{ width: '100px', height: 'auto' }} />
                            </div>
                        )}
                    </label>
                    <div className="barcode-scanner">
                        <label>
                            Barcode:
                            <input type="text" name="barcode" value={productState.barcode} onChange={handleChange} />
                            {errors.barcode && <span className="error">{errors.barcode}</span>}
                        </label>
                        <button type="button" onClick={startScan}>Scan</button>
                    </div>
                    {scanning && <div id="scanner-container" style={{ width: '250px', height: '250px' }}></div>}
                    <label>
                        Category:
                        <select name="category" value={productState.category} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Fashion">Fashion</option>
                            <option value="House-keeping">House-keeping</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Cars">Cars</option>
                            <option value="Finance">Finance</option>
                            <option value="Luxury">Luxury</option>
                        </select>
                        {errors.category && <span className="error">{errors.category}</span>}
                    </label>

                    <label>
                        Alternative Product:
                        <input type="text" name="alternative" value={productState.alternative} onChange={handleChange} />
                        {errors.alternative && <span className="error">{errors.alternative}</span>}
                    </label>
                    <button type="submit">Submit Product</button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;
