import React from 'react';
import * as Styled from './styles'

const MovieCard = ({movie}) => {
    console.log(movie)
  return (
    <Styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
      <h3>{movie.title}</h3>
      <Styled.Box>
        <span>{movie.release_date}</span>
      </Styled.Box>
    </Styled.Wrapper>
  )
}

export default MovieCard