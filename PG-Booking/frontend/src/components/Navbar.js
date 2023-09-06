import axios from "axios";
import './Navbar.css';


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = e => {
        e.preventDefault();
        dispatch({ type: 'LogOut' })
        sessionStorage.clear();
        navigate("/");
    }
    const [gender, setgender] = useState('All')
    const [atype, setatype] = useState('All')
    const [furnish, setfurnish] = useState('All')
    const handleSearch = e => {
        e.preventDefault();
        console.log("OK search")
        
        navigate('/search', { state: { gender: gender, atype: atype, furnish: furnish } })
    }
    const state = useSelector((state) => state);
    console.log("LoggedIn ", state.loggedin.IsLoggedIn)
    const isadmin = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "Admin" ? true : false;
    const isowner = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "Owner" ? true : false;
    const isuser = state.loggedin.IsLoggedIn && sessionStorage.getItem("role") === "Customer" ? true : false;
    const profile = isowner ? "/oprofile" : (isuser ? "/uprofile" : "/")
    return (

        <div>
            <nav className="navbar fixed-top navbar-expand-lg text-yellow fw-bold   bg-white">
                <div className="container-fluid ">
                    <Link className="navbar-brand    p-2" to="#">Pg-Mates |</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item  ">
                                <Link className="nav-link active" aria-current="page" to="/" id="one">Home</Link>
                            </li>
                            {isadmin ? (
                                <>
                                    <li className="nav-item  ">
                                        <Link className="nav-link active" aria-current="page" to="/owners">Owners</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/apartments">Apartments</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/feedbacks">Feedbacks</Link>
                                    </li>
                                </>
                            ) : ""}
                            {isowner ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/apartments">Apartments</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/myusers">Users</Link>
                                    </li>
                      
                                </>
                            ) : ""}
                            {isuser ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/mybookings">Bookings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/feedback">Feedback</Link>
                                    </li>
                                </>
                            ) : ""}
                            {!state.loggedin.IsLoggedIn ? (
                                <>
                                    <li class="nav-item dropdown " >
                                        <a class="dropbtn">Login <b class="caret"></b></a>
                                        <ul class="dropdown-menu">
                                            <li><Link className="list" 
                                            to="/admin">Admin</Link></li>
                                            <li><Link className="list" to="/login">Owner</Link></li>
                                            <li><Link className="list" to="/login">User</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="dropbtn">Register <b class="caret"></b></a>
                                        <ul class="dropdown-menu">
                                            <li><Link className="list" to="/admin">Admin</Link></li>
                                            <li><Link className="list" to="/oregister">Owner Register</Link></li>
                                            <li><Link className="list" to="/cregister">User Register</Link></li>
                                        </ul>
                                    </li>


                                    { <li className="nav-item items" id="one">
                                        <Link className="nav-link active" aria-current="page"id="one" to="/Aboutus">AboutUs </Link>
                                    </li> }

                                    { <li className="nav-item item">
                                        <Link className="nav-link active" aria-current="page"id="one" to="/Contactus">ContactUs </Link>
                                    </li> }

                                </>






                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to={profile} className="nav-link active" aria-current="page">Hi! {state.loggedin.Username}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link active" aria-current="page" onClick={logout}>Logout</Link>
                                    </li>
                                </>
                            )}

                        </ul>
                        <form className="d-flex">
                            <select className="form-control me-2" onChange={e => setatype(e.target.value)}>
                                <option value="All">All Types</option>
                                <option>1 BHK</option>
                                <option>2 BHK</option>
                                <option>2 RK</option>
                            </select>
                            <select className="form-control me-2" onChange={e => setgender(e.target.value)}>
                                <option value="All">All Genders</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <select className="form-control me-2" style={{ width: "300px" }} onChange={e => setfurnish(e.target.value)}>
                                <option value="All">All Types</option>
                                <option>Full Furnished</option>
                                <option>Semi Furnished</option>
                                <option>Unfurnished</option>
                            </select>
                            <button onClick={handleSearch} className="btn btn-warning bg-gradient text-white" type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

