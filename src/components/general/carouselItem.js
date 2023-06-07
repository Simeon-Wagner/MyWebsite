import React from "react";
import { Link } from "react-router-dom";
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

            <Link to={{
            pathname: '/MyWebsite/blog/page',
            state: { file_name: item.name }
            }}  
            style={{color: "black"}}> 
            Read more ...
            </Link>
        </div>
    </div>
    </>
};

