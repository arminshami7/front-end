// src/components/PostItem.jsx
import { Link as RouterLink } from 'react-router-dom';
function PostItem ({post}){
    return (
        <RouterLink to={`/posts/${post.id}`}>
            <div className="bg-gray-800 rounded-lg shadow-md p-6 
            hover:bg-gray-700 hover:scale-105 transition-transform duration-300">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className=" text-gray-400">
                 {post.body.substring(0,100) + '...'}
                 </p>
            </div>
        </RouterLink>
    );
}
export default PostItem;