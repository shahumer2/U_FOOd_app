import React, { createContext, useContext, useReducer } from 'react'
// this state if changed it will refelct on the whole app
const cartStateContext = createContext()
const cartDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size, img: action.img }]
        case "Remove":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr
        case "Update":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr
        case "DROP":
            let empArray = []
            return empArray
        default:
            console.log("error in dispatch")


    }

}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])
    return (

        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>

        </cartDispatchContext.Provider>
    )

}
export const useCart = () =>
    useContext(cartStateContext)

export const useDispatchCart = () =>
    useContext(cartDispatchContext)

