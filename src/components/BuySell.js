import React, { useState, useContext } from 'react'
import { store } from "../context"

const BuySell = ({ btnName, stockPrice, stockName }) => {
    const { state, setBalance, setArr } = useContext(store)
    const [quantity, setQuantity] = useState(0)

    const buyStock = (e, quantity, stockPrice, state, stockName) => {
        e.preventDefault()
        const equation = state.balance - (quantity * stockPrice).toFixed(2)
        if (equation > 0) {
            setBalance(equation)
            setArr({ stockName: stockName, details: [{ quantity: quantity, price: stockPrice }] })
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
            <button className="Buy" onClick={(e) => buyStock(e, quantity, stockPrice, state, stockName)}>{btnName}</button>
        </div>
    )
}

export default BuySell