
// Importing Proptypes library and bootstrap.
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import './movie-card.scss';

// Exporting MovieCard component.
export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Img className="card-image" variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant="link">Open</Button>
        </Link>
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
};