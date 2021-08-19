import React, { useState, useContext, componentWillUnmount } from 'react'
import { store } from "../context"

const UserStockDetails = ({data}) => {
    const { state, setBalance, removeFromArr } = useContext(store)

    const sellStock = (e) => {
        console.log(data.price)
        e.preventDefault();
        const equation = state.balance + (data.quantity * data.price)
        setBalance(equation)
        removeFromArr(data)
    }

    return (
        <div>
            <p>{data.quantity}</p>
            <p>{data.price}</p>
            <button className="Sell" onClick={(e) => sellStock(e)}>Sell</button>
        </div>
    )
}

export default UserStockDetails
