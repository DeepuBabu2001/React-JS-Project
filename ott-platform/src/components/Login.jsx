import React, { useState } from "react";
import './Login.css';
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login(){
    var [email , setEmail] = useState("");
    var [password , setPassword] = useState("");
    var [errormessage , setErrorMessage] = useState("");
    const navigate  = useNavigate();
    function AttemptLogin(){
        const loginuser = {
            email : email,
            password  : password
        };
        axios.post('http://127.0.0.1:8000/ottplatformapi/movielistapi/',loginuser)
        .then(response=>{
            setErrorMessage('')
            navigate('/movielist')
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        });


    };


    return(
        <>
        <Navbar/>
            <div className=" background2 row ml-0">
                <div className="container col-5">
                    <div className="row  border bg-white rounded border-primary">
                        <div className="col-8 offset-2">
                            <h1 className='text-center text-primary'>LOGIN</h1>
                            <div className="form-group">
                                <label className='text-secondary'>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label className='text-secondary'>Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            {errormessage && (
                                <div className="text-danger text-center">{errormessage}</div>
                            )}
                            <div className='text-center'>
                            <Link to="/forgotpass">Forgot Password</Link>
                        </div>
                            <div className="form-group">
                                <button className="btn btn-primary col-12 mt-3" onClick={AttemptLogin} >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
export default Login;