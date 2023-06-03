import React, {Component} from "react";
import Navbar from "../general/navbar";
import Footer from "../general/footer";
import "./mainpage.css";

class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
            <div className='main'>
            <div className="list-blogs">
                My List of Blogs
            </div>
            </div>
            <Footer/>
            </>
        );
    }
}
 
export default Blog;