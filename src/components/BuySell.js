import React, { useState, useContext } from 'react'
import { store } from "../context"

const BuySell = ({ btnName, price, company }) => {
    const { state, setBalance, setArr } = useContext(store)
    const [quantity, setQuantity] = useState(0)

    const buyStock = (e, quantity, price, state, company) => {
        e.preventDefault()
        const equation = parseFloat(state.balance) - (quantity * parseFloat(price))

        if (quantity === 0) {
            console.log("please increase quantity")
        } else if (equation > 0) {
            setBalance(equation.toFixed(2))
            setArr({
                company: company,
                details: [{ quantity: quantity, price: price }]
            })
            setQuantity(0)
        } else {
            console.log("not enough money")
        }
    }

    const plus = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
    }

    const minus = (e) => {
        e.preventDefault()
        quantity > 0 ? setQuantity(quantity - 1) : console.log("please increase quantity")
    }

    return (
        <div className="btns">
            <div>
                <button className="Sell" onClick={(e) => minus(e)}>-</button>
                <input min="0" name="quantity" value={quantity} type="number" readOnly />
                <button className="Buy" onClick={(e) => plus(e)}>+</button>
            </div>
            <button className="Buy" onClick={(e) =>
                buyStock(e, quantity, price, state, company)}>{btnName}</button>
        </div>
    )
}

export default BuySell