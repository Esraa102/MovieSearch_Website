import { useEffect, useState } from "react";
import "./movies.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "./movieCard";
const ApiUrl = "http://www.omdbapi.com/?apikey=5f5a9ed2";
function Movies() {
  const [show, setShow] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = () => {
    if (searchTerm !== "") {
      console.log(searchTerm);
      fetch(`${ApiUrl}&s=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setShow(data.Search);
        });
    }
  };
  useEffect(() => {
    setSearchTerm("frozen");
    fetch(`${ApiUrl}&s=frozen`)
      .then((res) => res.json())
      .then((data) => {
        setShow(data.Search);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="header">MovieLand</h1>
      <div className="input">
        <input
          type="text"
          id="search"
          placeholder="Search Movies..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <label htmlFor="search" onClick={getMovies}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </label>
      </div>
      <div className="moviesContainer">
        {show.length > 0 ? (
          show.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })
        ) : (
          <div className="empty">No Movies Found</div>
        )}
      </div>
    </div>
  );
}
export default Movies;
