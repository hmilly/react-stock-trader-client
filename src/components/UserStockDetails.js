import React, { useState, useContext } from 'react'
import { store } from "../context"

const UserStockDetails = ({ id, company, quantity, price }) => {
    const { state, setBalance, removeFromArr } = useContext(store)



    const sellStock = (e, quantity, price) => {
        e.preventDefault();
        console.log(company, quantity, price)


        const equation = state.balance + (quantity * price)
        //setBalance(equation.toFixed(2))

        state.stockArr.map(ca => {
            if (company === ca.stockName) {
console.log(id)
                console.log(ca.details)
           // const clicked = ca.details[id]
            // const newDetails = ca.details.splice(id, 1)
            //    removeFromArr(ca.details)
            }
        })

        //     setArr({ stockName: stockName, details: [{ quantity: quantity, price: stockPrice }] })

    }

    return (
        <div>
            <p>{quantity}</p>
            <p>{price}</p>
            <button className="Sell" onClick={(e) => sellStock(e, quantity, price)}>Sell</button>
        </div>
    )
}

export default UserStockDetails
