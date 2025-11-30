// src/components/MovieCard.jsx

function MovieCard({ movie }) { 
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.title}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    );
}
export default MovieCard;