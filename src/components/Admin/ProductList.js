import React, { useState } from 'react';
import '../../Assets/css/ProductList.css';
import EditProduct from './EditProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Coca Cola', barcode: '9900663582', category: 'Drinks', info: 'Coca-Cola: Coca-Cola has faced boycott calls due to its presence in Israel and alleged support for Israeli policies. Critics argue that its operations in Israel contribute economically to the region, which some view as supporting Israeli policies and practices in the occupied territories.', Alternative: 'ooooooooooo' },
        { id: 2, name: 'Chanel', barcode: '9900663582', category: 'Luxury', info: 'Chanel: While Chanel itself is not typically associated with direct ties to Israel, luxury brands like Chanel are sometimes targeted due to broader campaigns calling for boycotts of all goods from companies perceived to benefit from or support Israel economically or politically', Alternative: 'Doesnt exist' },
        { id: 3, name: 'Jaguar', barcode: '9900663582', category: 'Car', info: 'Jaguar: Jaguar, along with other automotive brands, has faced scrutiny for its business operations that include sales and partnerships in Israel. Critics argue that these economic ties contribute to the economy in a way that supports Israeli policies and practices in the occupied territories.', Alternative: 'lllllllllll' },
        { id: 4, name: 'KFC', barcode: '9900663582', category: 'Grocery', info: 'KFC: KFC, as part of Yum! Brands, operates franchises in Israel. Boycott proponents argue that purchasing KFC products indirectly supports the Israeli economy, contributing to what they view as the normalization or support of Israeli policies towards Palestinians.', Alternative: 'cccccccccccc' },
        { id: 5, name: 'ZARA', barcode: '9900663582', category: 'Fashion', info: 'Zara: Zara, owned by Inditex, has faced boycott calls due to its business operations that include stores and sales in Israel. Similar to other retail brands, critics argue that purchasing products from Zara indirectly supports the Israeli economy, potentially contributing to the maintenance of Israeli policies in the occupied territories.', Alternative: 'Doesnt exist' },
        // Add more products
    ]);

    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState({});

    const handleEditClick = (product) => {
        setIsEditing(true);
        setCurrentProduct(product);
    };

    const handleDeleteClick = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const closeEditForm = () => {
        setIsEditing(false);
        setCurrentProduct(null);
    };

    const toggleDescription = (id) => {
        setShowFullDescription(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="product-list">
            <h2>Products Grid</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={`https://via.placeholder.com/150`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <h4>BarCode: {product.barcode}</h4>
                        <h4>Category: {product.category}</h4>
                        <p>
                            {showFullDescription[product.id] ? product.info : `${product.info.substring(0, 100)}...`}
                            <span className="read-more" onClick={() => toggleDescription(product.id)}>
                                {showFullDescription[product.id] ? 'Show less' : 'Read more'}
                            </span>
                        </p>
                        <div className="alternative-products">
                            <h3>Alternative Products: {product.Alternative}</h3>
                        </div>
                        <div className="actions">
                            <button onClick={() => handleEditClick(product)}>Edit</button>
                            <button onClick={() => handleDeleteClick(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {isEditing && (
                <EditProduct
                    product={currentProduct}
                    onClose={closeEditForm}
                />
            )}
        </div>
    );
}

export default ProductList;
