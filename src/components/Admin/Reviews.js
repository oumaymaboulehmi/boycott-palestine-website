import React, { useState } from 'react';
import '../../Assets/css/Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([
        { id: 1, type: 'boycott', brand: 'Brand A', proofUrl: 'http://example.com/proof1', reason: 'Supports oppression', date: new Date().toLocaleDateString() },
        { id: 2, type: 'alternative', brand: 'Brand B', proofUrl: 'http://example.com/proof2', alternativeOf: 'Brand A', date: new Date().toLocaleDateString() },
        // Add more reviews
    ]);

    const boycottReviews = reviews.filter(review => review.type === 'boycott');
    const alternativeReviews = reviews.filter(review => review.type === 'alternative');

    return (
        <div className="reviews">
            <h2>Customer Reviews</h2>
            <div className="review-columns">
                <div className="review-column">
                    <h3>Boycott</h3>
                    <div className="review-list">
                        {boycottReviews.map(review => (
                            <div key={review.id} className="review-card">
                                <p><strong>Brand Name:</strong> {review.brand}</p>
                                <p><strong>Proof URL:</strong> <a href={review.proofUrl} target="_blank" rel="noopener noreferrer">{review.proofUrl}</a></p>
                                <p><strong>Reason:</strong> {review.reason}</p>
                                <p className="date">{review.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="review-column">
                    <h3>Alternative</h3>
                    <div className="review-list">
                        {alternativeReviews.map(review => (
                            <div key={review.id} className="review-card">
                                <p><strong>Brand Name:</strong> {review.brand}</p>
                                <p><strong>Proof URL:</strong> <a href={review.proofUrl} target="_blank" rel="noopener noreferrer">{review.proofUrl}</a></p>
                                <p><strong>Alternative of:</strong> {review.alternativeOf}</p>
                                <p className="date">{review.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
