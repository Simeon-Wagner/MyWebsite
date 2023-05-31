import React from "react";
import './carouselItem.css';

export const CarouselItem = ({ item, width }) => {
    return <>
    <div className="carousel-item" style={{ width: width }}>
        <div></div>
        <div className="image-container">
        <img src={item.image} alt="Project" className="carousel-image" />
        </div>
        <div className="carousel-item-text">
            <h2>
                {item.title}
            </h2>
            {item.description}
            <div></div>
            <a href={item.link} style={{color: "black"}}> Read more ...</a>
        </div>
    </div>
    </>
};