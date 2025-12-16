// src/pages/PostDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";


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
    <div className="max-w-4x1 mx-auto p-4"> {/* <-- کلاس اصلی کانتینر */}
     
      <button onClick={() => navigate(-1)}
       className="mb-8 bg-gray-700 hover:bg-gray-600 text-white 
      font-bold py-2 px-4 rounded-lg transition-colors" >
        &larr; Back to List</button>
        
         <article>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">
          {post.title}
        </h1>
        
        {/* بدنه پست با استایل‌دهی مخصوص متن طولانی */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.body}
        </div>
      </article> 
    </div>
  )
);
}
export default PostDetailPage;