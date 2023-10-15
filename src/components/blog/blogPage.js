import React from "react";
import Navbar from "../general/navbar";
import Footer from "../general/footer";
import { useLocation } from "react-router-dom";
import { BlogDisplayer } from "./blogDisplayer";

const BlogPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const file_name = params.get("file_name");

  return (
    <>
      <Navbar />
      
      <div className="main">
        <BlogDisplayer file_name={file_name} />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
