import { useEffect, useState } from "react";
import movieService from "../services/movie.service";
import { Link, useParams } from "react-router-dom";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [movieGenre, setMovieGenre] = useState("ANIMATED");
  const [releaseDate, setReleaseData] = useState("");
  const [length, setLength] = useState("");
  const [language, setLanguage] = useState("");
  const [ageRestriction, setAgeRestriction] = useState("P");
  const [movieStatus, setMovieStatus] = useState("NOWSHOWING");

  const { id } = useParams();

  const saveMovie = (e) => {
    e.preventDefault();

    const movie = {
      name : name, 
            director : director,
            actor : actor,
            movieGenre : movieGenre,
            releaseDate : releaseDate,
            length : length,
            language : language,
            ageRestriction : ageRestriction,
            movieStatus : movieStatus
    };
    if (id) {
      movieService
        .update(id, movie)
        .then((response) => {
          console.log("Movie data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      movieService
        .create(movie)
        .then((response) => {
          console.log("Movie added successfully", response.data);
          
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };
  useEffect(() => {
    if (id) {
      console.log(+id);
      movieService
        .get(id)
        .then((movie) => {
          // console.log(movie);
          setName(movie.data.name);
          setDirector(movie.data.director);
          setActor(movie.data.actor);
          setMovieGenre(movie.data.movieGenre);
          setReleaseData(movie.data.releaseDate);
          setLength(movie.data.length);
          setLanguage(movie.data.language);
          setAgeRestriction(movie.data.ageRestriction);
          setMovieStatus(movie.data.movieStatus);
        })
        .catch((error) => {
          console.log("something went wrong ", error);
        });
    }
  }, []);
  return (
    <div className="container">
      <h3>Add Movie</h3>
      <hr />
      <form>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter movie name"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            placeholder="Enter movie director"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="actor"
            value={actor}
            onChange={(e) => setActor(e.target.value)}
            placeholder="Enter actor"
          />
        </div>

        <div className="form-group">
          <select
            class="form-control col-4 form-select"
            name="movie-genre"
            id="movie-genre"
            value={movieGenre}
            onChange={(e) => setMovieGenre(e.target.value)}
          >
              <option value="ANIMATED">Animated</option>
              <option value="DRAMA">Drama</option>
              <option value="ACTION">Action</option>
              <option value="HORROR">Horror</option>
              <option value="COMEDY">Comedy</option>
              <option value="ROMANCE">Romance</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="date"
            className="form-control col-4"
            id="releasedate"
            value={releaseDate}
            onChange={(e) => setReleaseData(e.target.value)}
            placeholder="Enter release date of movie"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Enter movie's length by minute"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter movie language"
          />
        </div>

        <div className="form-group">
          <select
            class="form-control col-4 form-select"
            name="age-restriction"
            id="age-restriction"
            value={ageRestriction}
            onChange={(e) => setAgeRestriction(e.target.value)}
          >
            <option value="P">P</option>
            <option value="C13">C13</option>
            <option value="C16">C16</option>
            <option value="C18">C18</option>
          </select>
        </div>

        <div className="form-group">
          <select
            class="form-control col-4 form-select"
            name="movie-status"
            id="movie-status"
            value={movieStatus}
            onChange={(e) => setMovieStatus(e.target.value)}
          >
            <option value="NOWSHOWING">Now Showing</option>
            <option value="STOPPED">Stopped</option>
          </select>
        </div>

        <div>
          <button onClick={(e) => saveMovie(e)} className="btn btn-primary">
            Save
          </button>
        </div>
        
      </form>
      <hr />
      <Link to="/movie">Back to List</Link>
    </div>
  );
};
export default AddMovie;
