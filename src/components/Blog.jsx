import React from "react";
import '../styles/Blog.css'
import blog1 from '../assets/image/blog1.webp'
import blog2 from '../assets/image/blog2.webp'
import blog3 from '../assets/image/blog3.webp'
import blog4 from '../assets/image/blog4.webp'
import blog5 from '../assets/image/blog5.webp'
import blog6 from '../assets/image/blog6.webp'

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 

const posts = [
  {
    id: 1,
    date: "July 18, 2021",
    title: "Sed magna dui, dignissim id felis vitae, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
    image: blog1,
  },
  { 
   id: 2,
    date: "July 19, 2021", 
    title: "Fusce suscipit risus tempor,blandit urna at,laoreet ex", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]", 
    image: blog2
},
  { id: 3, 
    date: "July 20, 2021", 
    title: "Pellentesque varius,diam vitae mattis luctus,mi mi cursus", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]", 
    image: blog3
},
  { id: 4, 
    date: "July 21, 2021", 
    title: "Nam pharetra fringilla justo,et commodo lacus molestle ut", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]", 
    image: blog4 
},
  { id: 5, 
    date: "July 22, 2021", 
    title: "Fusce suscipit risus tempor,blandit urna at,laoreet ex", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]", 
    image: blog5 
},
  { id: 6, 
    date: "July 23, 2021", 
    title: "Pellentesque varius,diam vitae mattis luctus,mi mi cursus", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]", 
    image: blog6 
},
];

const Blog = () => {
  return (
   <div className="blog-container"> <center><h2>Blog</h2></center>
    <div className="post-grid">
       
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.image} alt="Post" className="post-image" />
          <div className="post-content">
            <p className="post-date">{post.date}</p>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            <a href="#" className="post-link">Read more</a>
          </div>
        </div>
      ))}
    </div> </div>
  );
};

export default Blog;
