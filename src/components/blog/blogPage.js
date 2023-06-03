import React, {Component} from "react";
import  Navbar  from "../general/navbar";
import Footer from "../general/footer";
import BlogDisplayer from "../blog/blogDisplayer";
import './Blog.css'

class BlogPage extends Component {
    state = {  } 
    render() { 
        return (
            <>            
            <Navbar/>
            <div className="main">
                <BlogDisplayer/>
            </div>
            
            <Footer/>
            </>
        );
    }
}
 
export default Blog;