import React from "react";
import ReadMeComponent from "../general/displayReadMe";
import './blogDisplayer.css'

function BlogDisplayer () {
   
        return (
            <>
            <div className="blog-content">
            <ReadMeComponent file_name='demo.md'/>
            </div>
            </>
        );
}
 
export default BlogDisplayer;