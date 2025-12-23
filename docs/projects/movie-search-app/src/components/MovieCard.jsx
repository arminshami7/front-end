// src/components/MovieCard.jsx
import { Link as RouterLink } from 'react-router-dom';
function MovieCard({ movie }) { 
    return (
        <RouterLink  to={`/movie/${movie.imdbID}`}>
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
        </RouterLink>
    );
}
export default MovieCard;