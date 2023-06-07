import React, {Component} from "react";
import Navbar from "../general/navbar";
import Footer from "../general/footer";
import {items} from "../../data/blogs"
import "./mainpage.css";
import { ContentAsList } from "../general/displayContent";

class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
                <div className='main'>
                    <div className="list-blogs">
                        <ContentAsList  items={items}/>
                    </div>
                </div>
            <Footer/>
            </>
        );
    }
}
 
export default Blog;