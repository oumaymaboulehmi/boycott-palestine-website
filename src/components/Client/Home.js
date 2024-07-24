// Home.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import '../../Assets/css/home.css'; 
const Home = () => {
    const quoteRef = useRef(null);

    useEffect(() => {
        const quoteElement = quoteRef.current;
        if (quoteElement) {
            quoteElement.classList.add('fadeInUp');
        }
    }, []);

    return (
        <div className="home-page">
            <section className="quote-section">
                <div className="quote" ref={quoteRef}>
                    <h1>From the river to the sea, Palestine will be "FREE"</h1>
                    <p>
                        By supporting Palestine and choosing to boycott Israeli products,
                        you are taking a stand against oppression and injustice.
                        Your everyday choices can contribute to a larger movement for freedom,
                        dignity, and human rights for the Palestinian people.
                    </p>
                </div>
            </section>
            <div className="button-section">
                {/* Utilisation de Link pour naviguer vers la page SearchAllPage */}
                <Link to="/search-all" className="btn">Search All</Link>
                {/* Autres boutons */}
                <Link to="/categorie" className="btn">Browse Categories</Link>
                <Link to="/Scan" className="btn"> Barcode scanner </Link>
                <Link to="/Something" className="btn">Something Missing</Link>
                
                
            </div>
        </div>
    );
}

export default Home;
