///src/App.jsx
import {Routes, Route} from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import PostDetailPage from './pages/PostDetailPage';

function App () {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto p-4"> {/* <-- کانتینر جدید */}
    <h1 className="text-4xl font-bold text-center mb-8">My Awesome Blog</h1>
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;