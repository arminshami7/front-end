///src/App.jsx
import {Routes, Route} from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import PostDetailPage from './pages/PostDetailPage';

function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;