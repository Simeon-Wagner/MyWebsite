import React from "react";
import { CarouselItem } from "./carouselItem";
import './displayContent.css'

export const ContentAsList = ({ items }) => {
    return <>
    <div className="content-list" >

    {items.map((item) => {
          return <div className="content-div">
                <CarouselItem item={item} width={"100%"} />
        </div>

        })}
        
    </div>
    </>
};
