import React from "react";
import { Button, Link } from "react-bootstrap";


export const FavoritesView = ({favMovies, removeFav}) => {

return (
    <div>
        <h3>Favorite movies:</h3>
            {favMovies.map ((movie) => {
              return(
                <div key={movie._id}>
                    <img src={movie.ImagePath} />
                    <Link to={"/movies/${movie._id"}>
                        <h4>{movie.Title}</h4>
                    </Link>
                    <Button variant="secondary" size="xs" onClick = {()=>removeFav(movie._id)}> Remove from Favorites </Button> 
                </div>  
              )
            })
        }
    </div>  
)
}

export default FavoritesView
