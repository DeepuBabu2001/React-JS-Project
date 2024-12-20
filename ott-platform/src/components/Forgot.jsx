import React from "react";
import './Forgot.css';
import Navbar from "./Navbar";


function Forgot(){

    return(
        <>
        <Navbar/>
            <div class=" background3 row ml-0">
                <div className="container col-5">
                    <div className="row  border bg-white rounded border-primary">
                        <div className="col- offset-2">
                            <h1 className='text-center text-primary'>FORGOT PASSWORD</h1>
                            <div className="form-group">
                                <label className='text-secondary'>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary col-12" ><a className="text-white" href='/resetpass'>Submit</a>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
export default Forgot;