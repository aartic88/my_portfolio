import React, { useState } from "react";
import "../styles/gallery.css";
import Academy_home from "../assets/Academy_home.png"; // Ensure the correct path to your image
import Academy_content from "../assets/Academy_content.png";
import Academy_contact from "../assets/Academy_contact.png";
import Academy_content_table from "../assets/Academy_content_table.png";
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      img: Academy_home,
    },
    {
      id: 2,
      img: Academy_content,
    },
    {
      id: 3,
      img: Academy_content_table,
    },
    {
      id: 4,
      img: Academy_contact,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img
              className="carousel-image"
              src={item.img}
              alt={`Slide ${item.id}`}
            />
            <div className="carousel-caption">
              <h5>{item.title}</h5>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Gallery;
