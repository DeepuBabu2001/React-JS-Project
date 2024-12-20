import React, { useEffect, useState } from "react";
import Navbar from "./Navbar2";
import './Subscription.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Subscription(){
  const [plans , setPalns] = useState([]);
  // const navigate = useNavigate();


  function fetchplan() {
    axios.get('http://127.0.0.1:8000/ottplatformapi/planlistapi/')
      .then(response => {
        console.log(response.data);
        setPalns(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movie data!", error);
      });
  }

  useEffect(() => {
    fetchplan();
  }, []);

    return(
        <>
        <Navbar/>
        <div className="background6">
        <div className="container my-5">
    <div className="row">
      {plans.map(plan =>(
      <div className="col-sm-4">
        <div className="card custom-card">
          <div className="card-body1 bg-secondary">
            <h2 className="card-title">{plan.planname}</h2>
            <h3>{plan.price}</h3>
            <h4>{plan.duration}</h4>
            <p className="card-text">{plan.description}</p>
            <Link to="" className="btn btn-danger mr-2">Subscribe Now</Link>
            {/* <a href="#" className="btn btn-danger mr-2">Subscribe Now</a> */}
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
  </div>
</>
);
};
export default Subscription;