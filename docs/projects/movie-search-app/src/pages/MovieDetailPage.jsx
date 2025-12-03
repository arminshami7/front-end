import { useParams } from "react-router-dom";

function MovieDetailPage(){
    const {id} = useParams()

    return (
        <div>
            <h1>MovieDetailPage</h1>
            <p>Details for movie with ID: {id}</p>
        </div>
    );
}

export default MovieDetailPage;