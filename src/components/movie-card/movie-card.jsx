
// Importing Proptypes library and bootstrap.
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

import './movie-card.scss';

// Exporting MovieCard component.
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100" onClick={() => onMovieClick(movie)}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Img className="card-image" variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Button onClick={() => onMovieClick(movie)} variant="primary" className="open-button" style={{ cursor: "pointer" }} >
          Open
        </Button>
      </Card.Body>
    </Card>
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