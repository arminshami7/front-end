// src/components/PostItem.jsx
import { Link as RouterLink } from 'react-router-dom';
import './PostItem.css'
function PostItem ({post}){
    return (
        <RouterLink to={`/posts/${post.id}`} className="post-item-link">
            <div className="post-item">
                <h3>{post.title}</h3>
                <p>{post.body.substring(0,100) + '...'}</p>
            </div>
        </RouterLink>
    );
}
export default PostItem;