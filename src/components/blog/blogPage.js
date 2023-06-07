import React from "react";
import Navbar from "../general/navbar";
import Footer from "../general/footer";
import { useParams } from 'react-router-dom';
import { BlogDisplayer } from "./blogDisplayer";

const BlogPage = () => {
  const { file_name } = useParams();

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
