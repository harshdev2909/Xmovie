import React, { useEffect, useState } from 'react';
import Header from './Header'; 

function Home() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/movies');
        const data = await response.json();
        setMovies(data); 
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex-1  p-4'>
        <h2 className='text-white text-xl font-bold mb-4'>Recommended Movies</h2>
        <div className='flex flex-wrap justify-center gap-1 '>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie._id} className=' p-2 rounded shadow flex flex-col gap-1 justify-center w-1/5'>
                <img 
                  src={movie.imageUrl} 
                  alt={movie.name} 
                  className='w-[80%] h-auto rounded' 
                />
                <h3 className='font-semibold'>{movie.name}</h3>
                <p className='text-gray-600'>{movie.category}</p>
              </div>
            ))
          ) : (
            <p className='text-white'>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
