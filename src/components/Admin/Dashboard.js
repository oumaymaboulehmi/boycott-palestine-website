import React from 'react';
import '../../Assets/css/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h3>Admin Dashboard</h3>
            <div className="stats">
                <div className="stat">
                    <h3>Products</h3>
                    <p>120</p>
                </div>
                <div className="stat">
                    <h3>Categories</h3>
                    <p>15</p>
                </div>
                <div className="stat">
                    <h3>Reviews</h3>
                    <p>75</p>
                </div>
                <div className="stat">
                    <h3>Users</h3>
                    <p>1</p>
                </div>
            </div>

            <div className="latest-news">
                <h3>Latest News on Palestine</h3>
                <p>Stay updated with the latest news related to Palestine:</p>
                <ul className="news-list">
                    <li>
                        <a href="https://www.aljazeera.com/where/palestine/">
                            <img src="https://besacenter.org/wp-content/uploads/2024/01/shutterstock_2379572031-scaled.jpg" alt="Al Jazeera - Palestine" />
                            <span>Al Jazeera - Palestine</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.middleeasteye.net/countries/palestine">
                            <img src="https://cdn-s-www.ledauphine.com/images/87D4BC5A-14B7-42FA-90C3-C68241E7A2E6/MF_contenu/une-nouvelle-manifestation-pour-la-palestine-ce-samedi-1720860170.jpg" alt="Middle East Eye - Palestine" />
                            <span>Middle East Eye - Palestine</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://electronicintifada.net/">
                            <img src="https://www.aljazeera.com/wp-content/uploads/2024/07/2024-07-09T115330Z_71940085_RC2LR8AD798M_RTRMADP_3_ISRAEL-PALESTINIANS-1720725082.jpg?resize=770%2C513&quality=80" alt="The Electronic Intifada" />
                            <span>The Electronic Intifada</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.maannews.net/eng/Default.aspx">
                            <img src="https://www.philomag.com/sites/default/files/styles/amp_1200x1200_1_1/public/images/IMG_3635.JPG" alt="Ma'an News Agency" />
                            <span>Ma'an News Agency</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
