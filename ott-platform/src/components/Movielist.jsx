import React, { useEffect, useState } from "react";
import Navbar from "./Navbar2";
import './Subscription.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Image } from "react-bootstrap";
import Pagination from "./Pagination";

function Movielist() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  function movieview(id) {
    navigate(`/movieview/${id}`); // Fixed template literal syntax
  }

  function fetchmovie() {
    axios.get('http://127.0.0.1:8000/ottplatformapi/movielistapi/')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movie data!", error);
      });
  }

  useEffect(() => {
    fetchmovie();
  }, []);

  return (
    <>
      <Navbar />
      <div className="background6">
        <div className="container my-5">
          <div className="row"> 
            {movies.map(movie => (
              <div key={movie.id} className="col-sm-4">
                <div className="card custom-card">
                  <div className="card-body1 bg-secondary">
                    <h3 className="card-title">{movie.moviename}</h3>
                    <Image className="card-img-top" src={`http://127.0.0.1:8000/${movie.thumbnail}`} alt={movie.moviename} />
                    <div className="inline-buttons">
                      <button className="btn btn-primary my-2 mr-3 " onClick={() => movieview(movie.id)}>View</button>
                      <button className="btn btn-primary">Watch Later</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default Movielist;
