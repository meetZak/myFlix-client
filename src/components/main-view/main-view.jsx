import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView} from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Babylon",
      image:
        "https://www.babylonmovie.com/posters/",
      director: "Damien Chazelle"
    },
    {
      id: 2,
      title: "Titanic",
      image:
        "https://www.amazon.com/Titanic-Decorative-Painting-Recreation-30x45%EF%BC%88cm%EF%BC%8912x18/dp/B09KM6ZS1P/ref=sr_1_2_sspa?keywords=Titanic%2Bposter&qid=1681854694&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzN0UyQVRSOFRaTUlIJmVuY3J5cHRlZElkPUEwNTE2MTUwMk04MFo4RVRYRkc3OCZlbmNyeXB0ZWRBZElkPUEwMDMyMTk5M042M1hNTDBESTRTTSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1",
      director: "James Cameron"
    },
    {
      id: 3,
      title: "Your Place or Mine",
      image:
        "https://www.imdb.com/title/tt12823454/mediaviewer/rm1722301697/?ref_=tt_ov_i",
      director: "Aline Brosh McKenna"
    },
    
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
  
};