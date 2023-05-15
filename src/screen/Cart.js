import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReduver'
// import trash from "./trash-can.png"
function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>

                <div className='text-center'> My cart is Empty </div>
            </div>



        )


    }
    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    var date = new Date();
    var current_date = date.getDate() + "-" + date.getFullYear() + "- " + (date.getMonth() + 1);
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var current_time = date.toLocaleTimeString('en-US', {
        hour: 'numeric', minute: 'numeric', hour12: true
    })
    var date_time = current_date + " " + current_time;
    let handleCheckOut = async () => {

        let userEmail = localStorage.getItem("userEmail")
        let response = await fetch("http://localhost:4000/api/OrderData",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    order_data: data,
                    email: userEmail,
                    order_date: date_time
                })

            }

        );

        if (response.status === 200) {

            dispatch({
                type: "DROP"
            })
        }
    }


    return (
        <div>
            <div className='conatiner m-auto mt-5  table-responsive table-responsive-sm table-responsive-md '>
                <table className="table table-hover table-dark">
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>

                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>

                            <th scope='col'>Amount</th>



                        </tr>

                    </thead>
                    <tbody>
                        {data.map((food, index) => (


                            <tr className='text-danger' color='white'>
                                <th scope='row'>{index + 1}</th>
                                <td >{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td><button className='btn btn-success ' onClick={() => {
                                    dispatch({
                                        type: "Remove", index: index
                                    })
                                }}> X </button></td>
                            </tr>


                        ))}

                    </tbody>





                </table>
                <div> <h2> Total Price ={totalPrice}</h2>

                </div>
                <div><button className='btn bg-success ' onClick={handleCheckOut}> Check Out </button>

                </div>



            </div>
        </div>
    )
}

export default Cart