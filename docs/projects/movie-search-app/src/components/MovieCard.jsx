// src/components/MovieCard.jsx
import {link} from 'react-router-dom';
function MovieCard({ movie }) { 
    return (
        <link to={`/movie/${movie.imdbID}`}>
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
        </link>
    );
}
export default MovieCard;