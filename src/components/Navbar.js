import React, { useState } from 'react'
import "./Navbar.css"
import {

    Link, useNavigate
}

    from "react-router-dom";
import Badge from "react-bootstrap/Badge"
import Modal from '../Modal';
import Cart from '../screen/Cart';
import { useCart } from './ContextReduver';



function Navbar() {
    let data = useCart();
    const [cartView, setcartView] = useState(false)
    const navigate = useNavigate()
    // now the logic is that for logout we have to remove auth token from local storage 
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> U-FOOD  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            {/*to check if logged in to show my ordrs with the help of auth token*/}
                            {(localStorage.getItem("authToken")) ?

                                <li className="nav-item">
                                    <Link className="nav-link fs-5" to="/myOrder">MY ORDERS </Link >
                                </li> : ""
                            };



                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>

                                <Link className="btn btn-white text-success" aria-current="page" to="/Login">LOGIN </Link>

                                <Link className="btn btn-white text-success" aria-current="page" to="/Createuser">SIGNUP </Link>


                            </div> :
                            <div>
                                <div className="btn btn-white text-success" onClick={() => { setcartView(true) }}>MY CART
                                    <Badge pill bg="danger" className='mx-2'> {data.length} </Badge>
                                </div>
                                {cartView ? <Modal onClose={() => setcartView(false)} ><Cart /></Modal> : null}
                                <div className="btn btn-white text-danger" onClick={handleLogout}>LOGOUT </div>
                            </div>
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

