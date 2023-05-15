import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import "./Home.css"
import Navbar from '../components/Navbar'

function Home() {
    const [search, setsearch] = useState("")
    const [FoodItem, setFoodItem] = useState([])
    const [FoodCat, setFoodCat] = useState([])
    const loadData = async () => {
        let response = await fetch("http://localhost:4000/api/fooddata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },


        });
        response = await response.json();
        setFoodItem(response[0])
        setFoodCat(response[1])

    }
    useEffect(() => {
        loadData()


    }, [])

    return (
        <div>
            <Navbar />
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>

                            <div className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />

                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x400/?fruit" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x400/?burger" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x400/?fruit" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div className="container">
                {
                    FoodCat !== [] ? FoodCat.map((data) => {
                        return (

                            <div className='row'>

                                <div className='cat' key={data._id}> {data.CategoryName}
                                    <hr></hr>
                                </div>
                                <hr />
                                {
                                    FoodItem !== [] ? FoodItem.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div className='col-md-6 col-lg-4 ' key={filterItems._id}>
                                                    <Card foodItem={filterItems}

                                                        options={filterItems.options[0]}
                                                    />
                                                </div>


                                            )

                                        }) : <div>NO SUCH DATA FOUND</div>
                                }

                            </div>





                        )
                    }) : ""
                }


            </div>

        </div>
    )
}

export default Home