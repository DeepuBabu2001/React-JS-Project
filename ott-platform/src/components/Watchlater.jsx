import React from "react";
import './Watchlater.css'
import Navbar from "./Navbar2";


function Watchlater(){
    return(
        <>
        <Navbar/>
        <div className="background7">
        <div className="container my-5">
      <div className="row">
      <div className="col-sm-4">
        <div className="card custom-card">
          <div className="card-body">
            <div>
            <img className="bg1"
                src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"/>
            </div>
            <h5 className="">Avengers</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div  class="d-flex justify-content-center">
           <h5 className="color: rgb(52, 47, 5);">Rating:<i className="star fa fa-star" ></i>4.5</h5>
          </div>
            <a href="/movieview" class="btn btn-danger mr-2">View</a>
            <a href="#" class="btn btn-primary">Remove</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card custom-card">
          <div className="card-body">
          <div>
            <img className="bg1"
                src="https://cdn.europosters.eu/image/750/harry-potter-philosopher-s-stone-i104639.jpg"/>
            </div>
            <h5 className="card-title">Harry Potter</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <h5 className="color: rgb(52, 47, 5);">Rating:<i className="star fa fa-star" ></i>4.5</h5>
            <a href="#" class="btn btn-danger mr-2">View</a>
            <a href="#" class="btn btn-primary">Remove</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card custom-card">
          <div className="card-body">
          <div>
            <img className="bg1" 
                src="https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"/>
            </div>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <h5 className="color: rgb(52, 47, 5);">Rating:<i className="star fa fa-star" ></i>4.5</h5>
            <a href="#" className="btn btn-danger mr-2">View</a>
            <a href="#" className="btn btn-primary">Remove</a>
          </div>
        </div>
      </div>
      <div className="page">
      <nav aria-label="Page navigation">
            <ul className="pagination mt-4">
              <li className="page-item"><a class="page-link" tabindex="1" aria-disabled="true" href="#">Previous</a></li>
              <li className="page-item"><a class="page-link" tabindex="0" aria-disabled="true" href="#">Current</a></li>
              <li className="page-item"><a class="page-link" href="#">1</a></li>
              <li className="page-item"><a class="page-link" href="#">2</a></li>
              <li className="page-item"><a class="page-link" href="#">3</a></li>
              <li className="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
          </div>
    </div>
  </div>
  </div>
</>

);
};

export default Watchlater;