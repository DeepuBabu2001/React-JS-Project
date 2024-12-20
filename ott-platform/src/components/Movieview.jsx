import React, { useEffect, useState } from "react";
import Navbar from "./Navbar2";
import './Movieview.css';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import axios from "axios";

function Movieview() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/ottplatformapi/movieviewapi/${id}/`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movie data!", error);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="background5 row ml-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.moviename}</h5>
                  <Image className="card-img-top" src={`http://127.0.0.1:8000/${movie.thumbnail}`} alt={movie.moviename} />
                  <p className="card-text">{movie.description}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  {movie.video ? (
                    <video style={{ height: '400px', width:'500px' }} controls>
                      <source id="player" src={`http://127.0.0.1:8000/${movie.video}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>Video not available</p>
                  )}
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => setRating(0)}>Clear</button>
                    <Rating
                      initialRating={rating}
                      onChange={(rate) => setRating(rate)}
                      emptySymbol={<FaStar color='#ccc' size={24} />}
                      fullSymbol={<FaStar color="#ffc107" size={24} />}
                    />
                  </div>
                  <div>
                    {rating}
                  </div>
                  <div className="text-center">
                    <Link to="/movielist">Back</Link>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link to="#" className="btn btn-primary">Play</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movieview;
