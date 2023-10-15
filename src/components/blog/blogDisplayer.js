import React from "react";
import ReadMeComponent from "../general/displayReadMe";
import './blogDisplayer.css'

export const BlogDisplayer  = ({file_name}) =>{
   
        return <>
            
            <div className="blog-content">
            <ReadMeComponent file_name={file_name}/>
            </div>
            </>
};