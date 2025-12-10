import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites(){

    const {favorites} = useMovieContext();

    if(favorites.length ){
        return (
            <div className="favorites">
                <h2>Your Favourites</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}>
                    </MovieCard>
                ))}

            </div>
            </div>
        )
    }
    return <div className="favorites-empty">
        <h2>No favorites movies yet</h2>
        <p>Start adding movies to your favorites</p>
    </div>
}

export default Favourites;