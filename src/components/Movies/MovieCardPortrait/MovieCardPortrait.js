import React from 'react';
import * as Styled from './styles';
import {AiFillStar} from 'react-icons/ai'

const MovieCardPortrait = ({movie}) => {
   console.log(movie);
  return (
    <Styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title}/>
      <h3>{movie.title} <span><AiFillStar/>{movie.vote_average}</span></h3>
      <Styled.Box>
        <span>{movie.release_date}</span>
      </Styled.Box>
    </Styled.Wrapper>
  )
}

export default MovieCardPortrait