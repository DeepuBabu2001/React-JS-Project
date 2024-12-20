import React from "react";

import Navbar from "./Navbar2";


function Watchhistory(){
    return(
        <>
        <Navbar/>
        <div className="background7">
        <div className="container my-5">
      <div className="row">
      <div className="col-sm-4">
        <div className="card custom-card">
          <div className="card-body">
          <iframe width="300" height="250" src="https://www.youtube.com/embed/X7G1soqzaRA?si=iyxOYFrkQyI8HbPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h5 className="">Avengers</h5>
            <p className="card-text">Date : 20 March</p>
            <p className="card-text">Time : 11:00pm</p>
            <div  class="d-flex justify-content-center">
           <h5 className="color: rgb(52, 47, 5);">Rating:<i className="star fa fa-star" ></i>4.5</h5>
          </div>
            <a href="/" class="btn btn-danger mr-2">Play</a>
            <a href="#" class="btn btn-primary">Remove</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card custom-card">
          <div className="card-body">
          <iframe width="300" height="250" src="https://www.youtube.com/embed/CEmOJrx7_mE?si=1xpaeDOO6ZTSGzpu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h5 className="card-title">Harry Potter</h5>
            <p className="card-text">Date : 13 June</p>
            <p className="card-text">Time : 13:00pm</p>
            <h5 className="color: rgb(52, 47, 5);">Rating:<i className="star fa fa-star" ></i>4.5</h5>
            <a href="#" class="btn btn-danger mr-2">Play</a>
            <a href="#" class="btn btn-primary">Remove</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card custom-card">
          <div className="card-body">
          <iframe width="300" height="250" src="https://www.youtube.com/embed/K6WXTjGOfbk?si=p7gfMQADAUAi_17A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h5 className="card-title">Bat man</h5>
            <p className="card-text">Date : 4 January</p>
            <p className="card-text">Time : 4:00pm</p>
            <h5 className="color: rgb(52, 47, 5);">Rating:<i className="star fa fa-star" ></i>4.5</h5>
            <a href="#" className="btn btn-danger mr-2">Play</a>
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

export default Watchhistory;