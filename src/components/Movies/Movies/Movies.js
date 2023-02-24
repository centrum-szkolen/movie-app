import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const Movies = ({movies}) => {
  return (
    <div>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  )
}

export default Movies