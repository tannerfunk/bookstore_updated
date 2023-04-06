import { useState, useEffect } from 'react';
//import movieData from '../MovieData.json';

import {Movie} from '../movie/movie'

function MovieCollectionPage() {

  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie')
      const temp = await rsp.json();
      setMovieData(temp);
  };

  fetchMovie();
  }, []);

  return (
    <div>
      <h1>Movie Collection</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
            {/* pull data from our API and put it onto the page, repeatedly */}
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieCollectionPage;