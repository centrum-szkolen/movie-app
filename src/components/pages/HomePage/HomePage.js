import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Movies from "../../Movies/Movies/Movies";
import 'swiper/css';

const HomePage = () => {
  const { movies:popular, loading, error } = useMoviesData("/movie/popular");
  const { movies:topRated} = useMoviesData("/movie/top_rated");
  const { movies:latest} = useMoviesData("/movie/upcoming");
  const { movies:tvPopular} = useMoviesData("/tv/popular");

  console.log(tvPopular)

  return (
    <div>
      <Movies portrait title="Popular Movies" movies={popular} />
      <Movies title="Top Rated" movies={topRated} />
      <Movies portrait title="Upcoming Movies" movies={latest} />
      <Movies title="Popular TV Shows" movies={tvPopular} />
    </div>
  );
};

export default HomePage;
