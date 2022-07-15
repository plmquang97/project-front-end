import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import movieService from "../services/movie.service";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  const init = () => {
    movieService
      .getAll()
      .then((response) => {
        console.log("Printing movie data", response.data);
        setMovie(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  const handleDelete = (movieId) => {
    console.log("Printing id", movieId);
    movieService.remove(movieId).then((response) => {
      console.log("movie deleted successfully", response.data);
    });

  };
  
  return (
    <div className="container">
      <h3>List of Movie</h3>
      <hr />
      <div>
        <Link to="/addmovie" className="btn btn-primary mb-2">
          Add Movie
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Director</th>
              <th>Actor</th>
              <th>Length</th>
              <th>Language</th>
              <th>Genre</th>
              <th>ReleaseDate</th>
              <th>AgeRestriction</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movie.map((movie) => (
              <tr key={movie.movieId}>
                <td>{movie.name}</td>
                <td>{movie.director}</td>
                <td>{movie.actor}</td>
                <td>{movie.length}</td>
                <td>{movie.language}</td>
                <td>{movie.movieGenre}</td>
                <td>{movie.releaseDate}</td>
                <td>{movie.ageRestriction}</td>
                <td>{movie.movieStatus}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/movie/edit/${movie.movieId}`}
                  >
                    Update
                  </Link>
                  
                </td>
                <td>
                <button
                    className="btn btn-danger ml-2"
                    type="button"
                    onClick={() => {
                      handleDelete(movie.movieId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MovieList;
