// src/pages/BlogListPage.jsx
import { useState,useEffect } from "react";
import PostItem from "../components/PostItem";
import './BlogListPage.css'

function BlogListPage() {
  const [posts,setPost] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const response = await fetch (`https://jsonplaceholder.typicode.com/posts`);
            const data = await response.json();
            setPost(data);

        }   catch(error) {
             console.error("خطا در دریافت دیتا:", error);
        setError("Oops! Something went wrong. Please check your connection and try again.");
            
        }   finally {
            setIsLoading(false);

        }  
    };

    fetchPosts();

  }, []);


   if (isLoading) {
  return <p>Loading posts...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}

  return (
      <div className="blog-list-page"> {/* <-- یک کلاس به div اصلی بده */}
      <h1>Blog Posts</h1>
      <div className="post-list"> {/* <-- این کلاس برای چیدمان کارت‌هاست */}
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
   
);
}
export default BlogListPage;