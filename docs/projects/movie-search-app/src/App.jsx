// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css'; // فایل استایل
import MovieCard from './components/MovieCard';

function App() {
  // 1. State برای نگهداری لیست پست‌ها (شروع با یک آرایه خالی)
  const [movies, setMovies] = useState([]);

  // 2. State برای مدیریت وضعیت لودینگ (در شروع کار، در حال لودینگ هستیم)
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState("");

  const [error, setError] = useState(null);
  

  

const handleSearch = async(e) =>{
  e.preventDefault();
  setIsLoading(true);
  setError(null); // <-- خیلی مهم: خطای قبلی رو پاک می‌کنه
  try{
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
       // و بعد این url رو به fetch بده
        const response = await fetch(url);
        const data = await response.json();
        if(data.Search){

        
        setMovies(data.Search);}
        else{
          setMovies([])
        }
        console.log("دیتا با موفقیت دریافت شد:", data);
      } catch(error){
        console.error("خطا در دریافت دیتا:", error);
        setError("Oops! Something went wrong. Please check your connection and try again."); // <-- به کاربر خطا رو نشون میدیم
      }
     finally {
      setIsLoading(false);
    }
  };

    return (
    <div>
      <h1>My Awesome App</h1>
      <form onSubmit={handleSearch}>
        <input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
      </form>
      <div className="content">
        {/* اینجا شرط رو بررسی می‌کنیم */}
        {isLoading ? (
          <p className="loading-message">در حال بارگذاری اطلاعات...</p>
        ) : error ? (
    <div className="error-message">
      <h2>{error}</h2> {/* <-- نمایش پیام خطا */}
    </div>
  ) : movies.length > 0 ? (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  ) : (
    <div className="initial-prompt">
      <h2>Search for your favorite movies!</h2>
      <p>Start by typing a movie title in the search bar above.</p>
    </div>
  )}
</div>
    </div>
  );
}

export default App;