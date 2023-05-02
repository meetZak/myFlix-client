
// Importing Proptypes library.
import PropTypes from "prop-types";

// Exporting MovieCard component.
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};

// Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.object,
    director: PropTypes.object,
    release: PropTypes.number
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};