import React from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Blog.scss";

function Blog() {
  return (
    <div>
      <NavBar/>
      <div className="blog--container">
        
        <div><h1>Blog</h1></div>
        <div><p>Insert Blog Posts Here</p></div>
      </div>
      <Footer/>
    </div>
    );
}

export default Blog;
