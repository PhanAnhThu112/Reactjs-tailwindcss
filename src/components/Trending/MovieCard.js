

import { Movie } from './moviesData';
import {BiTime} from 'react-icons/bi';

const MovieCard = ({ movie}: {movie:Movie}) => {
  const {src,title,main,runtime} = movie
  return (
    <div className='card'>
      <img src={src} alt="" className='w-full h-auto' />
      <div className='p-4 text-white'>
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className=' top-3  badge'>
        <BiTime/>
        <p>{runtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;