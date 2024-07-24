import React, { useState } from 'react';
import '../../Assets/css/AddProducts.css';
import { Html5QrcodeScanner } from 'html5-qrcode';

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        brandImage: null,
        barcode: '',
        category: '',
        price: '',
        publish: false,
        alternative: ''
    });

    const [errors, setErrors] = useState({});
    const [scanning, setScanning] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validate = () => {
        let valid = true;
        const newErrors = {};

        // Title validation
        if (!product.title.trim()) {
            valid = false;
            newErrors.title = 'Product title is required.';
        } else if (product.title.length < 3) {
            valid = false;
            newErrors.title = 'Product title must be at least 3 characters long.';
        }

        // Description validation
        if (!product.description.trim()) {
            valid = false;
            newErrors.description = 'Description is required.';
        } else if (product.description.length < 10) {
            valid = false;
            newErrors.description = 'Description must be at least 10 characters long.';
        }

        // Brand Image validation
        if (!product.brandImage) {
            valid = false;
            newErrors.brandImage = 'Brand image is required.';
        } else if (!/\.(jpg|jpeg|png|gif)$/i.test(product.brandImage.name)) {
            valid = false;
            newErrors.brandImage = 'Brand image must be a JPG, JPEG, PNG, or GIF file.';
        }

        // Barcode validation
        const barcodePattern = /^[0-9]{10,13}$/; // Only digits, 8-12 characters long
        if (!barcodePattern.test(product.barcode)) {
            valid = false;
            newErrors.barcode = 'Invalid barcode. Must be 10-13 digits long.';
        }

        // Category validation
        if (!product.category) {
            valid = false;
            newErrors.category = 'Category is required.';
        }

        

        // Alternative Product validation
        if (product.alternative.trim() && product.alternative.length < 3) {
            valid = false;
            newErrors.alternative = 'Alternative product must be at least 3 characters long.';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // Submit product data to API
            console.log('Product data:', product);
            // Add API call here
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
          setProduct(prevState => ({ ...prevState, barcode: decodedText }));
          scanner.clear();
          setScanning(false);
        }

        function onScanFailure(error) {
          console.warn(`Code scan error = ${error}`);
        }
    };

    return (
        <div className="add-product">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Title:
                    <input type="text" name="title" value={product.title} onChange={handleChange} />
                    {errors.title && <span className="error">{errors.title}</span>}
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={product.description} onChange={handleChange} />
                    {errors.description && <span className="error">{errors.description}</span>}
                </label>
                <label>
                    Brand Image:
                    <input type="file" name="brandImage" onChange={(e) => setProduct({ ...product, brandImage: e.target.files[0] })} />
                    {errors.brandImage && <span className="error">{errors.brandImage}</span>}
                </label>
                <div className="barcode-scanner">
                    <label>
                        Barcode:
                        <input type="text" name="barcode" value={product.barcode} onChange={handleChange} />
                        {errors.barcode && <span className="error">{errors.barcode}</span>}
                    </label>
                    <button type="button" onClick={startScan}>Scan</button>
                </div>
                {scanning && <div id="scanner-container" style={{ width: '250px', height: '250px' }}></div>}
                <label>
                    Category:
                    <select name="category" value={product.category} onChange={handleChange}>
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
                    <input type="text" name="alternative" value={product.alternative} onChange={handleChange} />
                    {errors.alternative && <span className="error">{errors.alternative}</span>}
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" name="publish" checked={product.publish} onChange={handleChange} />
                    Publish on site
                </label>
                <button type="submit">Submit Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
