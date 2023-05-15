import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReduver';
import "./Card.css"
function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();

    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options)

    const [qty, setqty] = useState(1)
    const [size, setsize] = useState("")

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }

        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "Update", id: props.foodItem._id, price: finalprice, qty: qty })
                //if false return back
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "Add", id: props.foodItem._id, name: props.foodItem.name, price: finalprice, qty: qty, size: size });
                return

            }
            return
        }
        await dispatch({ type: "Add", id: props.foodItem._id, name: props.foodItem.name, price: finalprice, qty: qty, size: size });

    }

    let finalprice = qty * parseInt(options[size])
    useEffect(() => {
        setsize(priceRef.current.value)


    }, [])



    return (
        <div className='space'>
            <div className="card my-2 border-warning" style={{ "width": "20rem" }}>
                <img src={props.foodItem.img} className="card-img-top" style={{ height: "150px", objectFit: "fill" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.foodItem.description}</p>
                    <select onChange={(e) => setqty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1} >{i + 1}</option>
                            )
                        })}
                    </select>

                    <select className='mx-2' ref={priceRef} onChange={(e) => setsize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}> {data}</option>
                        })}
                    </select>
                    <div className="container d-inline">

                        ₹{finalprice}

                    </div>
                    <hr></hr>
                    <div className="btn btn-success text-white" onClick={handleAddToCart}>ADD TO CART </div>

                </div>
            </div>
        </div>
    )
}

export default Card