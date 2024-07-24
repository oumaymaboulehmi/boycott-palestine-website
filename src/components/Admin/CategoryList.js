import React from 'react';
import '../../Assets/css/CategoryList.css';
import electronicsImage from '../../Assets/Images/ai.png'; // Make sure these images exist
import clothingImage from '../../Assets/Images/fashion.png';
import booksImage from '../../Assets/Images/car.png';

const CategoryList = () => {
    const categories = [
        { id: 1, name: 'Electronics', description: 'Category for electronic products', image: electronicsImage },
        { id: 2, name: 'Clothing', description: 'Category for clothing items', image: clothingImage },
        { id: 3, name: 'Cars', description: 'Category for cars and automatism', image: booksImage },
        // Add more categories as needed
    ];

    return (
        <div className="category-list">
            <h2>Category List</h2>
            <div className="categories">
                {categories.map(category => (
                    <div key={category.id} className="category-card">
                        <img src={category.image} alt={category.name} className="category-image" />
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryList;
