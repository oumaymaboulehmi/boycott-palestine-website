import React, { useState, useEffect } from 'react';
import '../../Assets/css/ImageCarousel.css'; // Import your CSS file

const images = [
  {
    image: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25038633/GettyImages_1727389262.jpg?quality=90&strip=all&crop=0%2C0.024402147388969%2C100%2C99.951195705222&w=2400",
    caption: "Stand against injustice with every choice you make."
  },
  {
    image: "https://www.middleeastmonitor.com/wp-content/uploads/2021/06/20210605_2_48622325_65803549-1.jpg",
    caption: "Support justice and equality through your actions."
  },
  {
    image: "https://i0.wp.com/thedailycougar.com/wp-content/uploads/2024/03/Print_Opinion_BDS-needs-to-be-more-targeted_JoseGonzalez-Campelo-01.png?resize=810%540&ssl=1",
    caption: "Boycott as a means to drive change."
  },
  {
    image: "https://cdn2.opendemocracy.net/media/original_images/GettyImages-2013171047.jpg",
    caption: "Your choices matter. Stand for what is right."
  },
  {
    image: "https://cdn.presstv.ir/Photo/2024/4/5/4caa9938-b62d-4f89-a6cb-9870ea8ea925.JPG",
    caption: "Join the movement for justice and human rights."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <img src={images[currentIndex].image} alt={images[currentIndex].caption} />
        <div className="caption">{images[currentIndex].caption}</div>
      </div>
    </div>
  );
};

export default Carousel;
