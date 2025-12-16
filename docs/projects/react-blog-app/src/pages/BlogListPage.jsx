// src/pages/BlogListPage.jsx
import { useState,useEffect } from "react";
import PostItem from "../components/PostItem";

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
  return <p className="text-center text-x1">Loading posts...</p>;
}

if (error) {
  return <p className="text-center text-x1 text-red-500">Error: {error}</p>;
}

  return (
      <div className="blog-list-page"> {/* <-- یک کلاس به div اصلی بده */}
      <div className="container"> 
      <h1>Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* <-- این کلاس برای چیدمان کارت‌هاست */}
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
        </div>
      </div>
    </div>
   
);
}
export default BlogListPage;