import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Movies from "../../Movies/Movies/Movies";
import 'swiper/css';

const HomePage = () => {
  const { movies, loading, error } = useMoviesData("/popular");

  console.log(movies, loading, error);

  return (
    <div>
      <Movies title="Popular Movies" movies={movies} />

    </div>
  );
};

export default HomePage;
