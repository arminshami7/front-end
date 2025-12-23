import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './MovieDetailPage.css';

function MovieDetailPage(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try{
            const apiKey = import.meta.env.VITE_OMDB_API_KEY;
            const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
            const response = await fetch(url);
            const data =await response.json();

            setMovieDetails(data);
            }catch(error){
              console.error("خطا در دریافت دیتا:", error);
              setError("Oops! Something went wrong. Please check your connection and try again.");
            } finally{
                setIsLoading(false);
            }

        };

        fetchMovieDetails();
    }, [id]);

    if(isLoading) return <p>درحال بارگذاری جزییات</p>;
    if(error) return <p>{error}</p>

    return (
  movieDetails && (
    <div className="movie-detail-page"> {/* یک کلاس برای استایل‌دهی آینده */}
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <div>
        <button onClick={() => navigate(-1)}>← Back to Search</button>
        <h1>{movieDetails.Title}</h1>
        <p><strong>Year:</strong> {movieDetails.Year}</p>
        <p><strong>Director:</strong> {movieDetails.Director}</p>
        <p><strong>IMDb Rating:</strong> {movieDetails.imdbRating} / 10</p>
        <hr />
        <p>{movieDetails.Plot}</p>
      </div>
    </div>
  )
    );
}

export default MovieDetailPage;