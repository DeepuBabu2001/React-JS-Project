import './Register.css';
import Navbar from './Navbar';
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconf, setPasswordConf] = useState("");
    const [errormessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const Signupuser = () => {
        const user = {
            username: name,
            email: email,
            password: password,
            password_confirmation: passwordconf
        };

        axios.post('http://127.0.0.1:8000/ottplatformapi/signupapi/', user)
            .then(response => {
                setErrorMessage(''); // Clear any previous error messages
                navigate('/login'); // Navigate to the login page on success
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(' '));
                } else {
                    setErrorMessage('Failed to connect to API');
                }
            });
    };

    return (
        <>
            <Navbar />
            <div className="background1 row ml-0">
                <div className="container col-5">
                    <div className="row border bg-white rounded border-primary">
                        <div className="col-8 offset-2">
                            <h1 className='text-center text-primary mb-4'>REGISTER</h1>
                            {errormessage && <div className="alert alert-danger">{errormessage}</div>}

                            <div className="form-group">
                                <label className='text-secondary'>Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className='text-secondary'>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className='text-secondary'>Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className='text-secondary'>Confirm Password:</label>
                                <input
                                    type="password"
                                    value={passwordconf}
                                    onChange={(event) => setPasswordConf(event.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <button type="button" onClick={Signupuser} className="btn btn-primary col-12 mt-3">
                                    Submit
                                </button>
                            </div>
                            <div className='text-center'>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
