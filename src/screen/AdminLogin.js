import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./AdminLogin.css"


function AdminLogin() {
    const navigate = useNavigate()
    const [Credentials, setCredentials] = useState({ email: "", password: "" })

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/Adminlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: Credentials.email, password: Credentials.password, })





        });
        const json = await response.json();
        console.log(json)
        if (!json.success) {
            alert("enter valid credentials")
        }
        if (json.success) {
            localStorage.setItem("AdminEmail", Credentials.email)
            localStorage.setItem("AdminauthToken", json.authToken)
            console.log(localStorage.getItem("authToken"))
            navigate("/Dashboard")
        }


    }
    const onChange = (event) => {
        setCredentials({
            ...Credentials, [event.target.name]: event.target.value
        })

    }


    return (
        <div className='backi' >



            <div className=" container justify-content-center align-item-center">
                <div className='brand'><h1>U-FoodApp</h1>

                    <Link to="/" className="btn btn-success Admin my-2 my-sm-0" > Home </Link>
                </div>
                <div className='log head'><h1>    Admin Login</h1>

                </div>

                <div class="card car border-warning" style={{ width: "23rem", height: "20rem" }}>
                    <div class="card-body">


                        <form onSubmit={handleClick}>


                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={Credentials.email} onChange={onChange} aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={Credentials.password} onChange={onChange} required />
                            </div>

                            <button type="submit" className="btn btn-primary my-4" >Login</button>



                        </form>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default AdminLogin
