import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css"
function Signup() {
    const [Credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" })
    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: Credentials.name, email: Credentials.email, password: Credentials.password, location: Credentials.location })





        });
        const json = await response.json();
        console.log(json)
        if (!json.success) {
            alert("enter valid credentials")
        }


    }
    const onChange = (event) => {
        setCredentials({
            ...Credentials, [event.target.name]: event.target.value
        })

    }
    return (
        <div className="sback">

            <div className="container my-3">
                <div className='brand'><h1>U-FoodApp</h1></div>
                <div className='Sig'><h1>Sign-Up</h1></div>

                <div class="card car  border-danger" style={{ width: "23rem", height: "30rem" }}>
                    <div class="card-body">
                        <form onSubmit={handleClick}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">NAME</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={Credentials.name} onChange={onChange} aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail2" name="email" value={Credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword4" name="password" value={Credentials.password} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"> Location</label>
                                <input type="text" className="form-control" id="exampleInputEmail7" name="location" value={Credentials.location} onChange={onChange} aria-describedby="emailHelp" />

                            </div>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                            <Link to="/login" className="btn btn-danger mx-3" >Already a User </Link>

                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Signup