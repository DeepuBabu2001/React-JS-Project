import React from "react";
import './Changepass.css'
import Navbar from "./Navbar";



function Changepass(){

    return(
        <>
        <Navbar/>
            <div class=" background8 row ml-0">
                <div className="containerchangepass col-5">
                    <div className="row  border bg-white rounded border-primary">
                        <div className="col-8 offset-2">
                            <h1 className='text-center text-primary'>RESET PASSWORD</h1>
                            <div className="form-group">
                                <label className='text-secondary'>New Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className='text-secondary'>Confrim Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                />
                            </div>
                            <div className='text-center'>
                            <a href='/forgotpass'>Forgot Password</a>
                        </div>
                            <div className="form-group">
                                <button className="btn btn-primary col-12 mt-3" >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
export default Changepass;