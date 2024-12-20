import React from "react";
import Navbar from "./Navbar2";
import './Myplan.css';

function Myplan(){
    return(
    <>
      <Navbar />
      <div className="background9">
        <div className="adjust">
          <div className="card text-center myplan-card">
            <div className="card-header mb-5">
              <h2>My Plan</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">1 Monthly Plan</h5>
              <div className='d-flex justify-content-center mb-5'>
                <p className="card-text">You Can Watch Unlimited Movies for a Month</p>
              </div>
            </div>
            <div className="card-footer text-muted">
              <p className="text-dark">Rs 399</p>
            </div>
          </div>
          <table className="table table-bordered table-striped table-dark myplan-table">
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Month Plan</td>
                <td>4-June/2023</td>
                <td>399 Rs</td>
                <td><button className='btn btn-primary'>Download</button></td>
              </tr>
              <tr>
                <td>1 Month Plan</td>
                <td>2-October/2023</td>
                <td>399 Rs</td>
                <td><button className='btn btn-primary'>Download</button></td>
              </tr>
              <tr>
                <td>6 Month Plan</td>
                <td>12-January/2024</td>
                <td>699 Rs</td>
                <td><button className='btn btn-primary'>Download</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Myplan;
