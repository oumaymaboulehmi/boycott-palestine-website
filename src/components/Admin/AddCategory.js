import React from 'react';
import '../../Assets/css/AddCategory.css';

const AddCategory = () => {
    return (
        <div className="add-category">
            <h2>Add Category</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="categoryName">Category Name</label>
                    <input type="text" id="categoryName" name="categoryName" />
                </div>

                <div className="form-group">
                    <label htmlFor="categoryImage">Category Image (Optional)</label>
                    <input type="file" id="categoryImage" name="categoryImage" accept="image/*" />
                </div>

                <button type="submit">Add Category</button>
            </form>
        </div>
    );
}

export default AddCategory;
