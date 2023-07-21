import { moviesData } from './moviesData';
import MovieCard from './MovieCard';


const index = () => {
  return (
    <>
      <h3 className="border-b border-primary mt-12 mb-6 pd-4">Trending</h3>
      <div className="grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 ">
        
        {moviesData.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-125 transition ease-out duration-500">Load more</button>
      </div>
    </>
  );
};

export default index;