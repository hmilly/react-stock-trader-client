import React, { useState, useContext } from 'react'
import { store } from "../context"

const BuySell = ({ btnName, stockPrice, stockName }) => {
    const { state, setBalance, setArr } = useContext(store)

    const [quantity, setQuantity] = useState(0)


    const buyStock = (quantity, stockPrice, state, stockName) => {
        const equation = state.balance - (quantity * stockPrice)
        if (equation >= 0) {
            setBalance(equation)
            setQuantity(0)
            setArr({stockName: stockName, quantity: quantity, boughtAt: stockPrice})
        } else {
            console.log("not enough money")
        }
    }

    const sellStock = () => {

    }



    const buyOrSell = (e) => {
        e.preventDefault()
        e.target.className === "Buy"
            ? buyStock(quantity, stockPrice, state, stockName)
            : sellStock(e)
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
                <input className="quantity" min="0" name="quantity" value={quantity} type="number" readOnly />
                <button className="Buy" onClick={(e) => plus(e)}>+</button>
            </div>
            <button className={btnName} onClick={(e) => buyOrSell(e, quantity)}>{btnName}</button>
        </div>
    )
}

export default BuySell
