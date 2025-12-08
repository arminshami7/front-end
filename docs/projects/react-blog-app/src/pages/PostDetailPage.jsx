// src/pages/PostDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './PostDetailPage.css';


function PostDetailPage() {
  const {postId} = useParams();

  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   const fetchPostDetails = async() => {
    try{
      const response = await  fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const data = await response.json();
            setPost(data);
    } catch(error) {
      console.error("خطا در دریافت دیتا:", error);
      setError("Oops! Something went wrong. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
   };

   fetchPostDetails();
  },[postId]);

  if(isLoading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


 return (
  post && (
    <div className="post-detail-page"> {/* <-- کلاس اصلی کانتینر */}
      <button className="back-button" onClick={() => navigate(-1)}>← Back to List</button>
      <h1>{post.title}</h1>
      <p className="post-body">{post.body}</p> {/* <-- کلاس برای پاراگراف اصلی */}
    </div>
  )
);
}
export default PostDetailPage;