import React, { useState, useContext } from 'react'
import BuySell from "./BuySell"
import { store } from "../context"

const UserStock = ({ company, buyprice, quantity }) => {
    const { state } = useContext(store)

    return (
        <div className="user-stock">
            <div className="stock-name">
                <h4>{company}:</h4>
                <h4>{quantity}</h4>
            </div>
            <div className="stock-price">
                <h4>bought at:</h4>
                <h4>{buyprice}</h4>
            </div>
            <BuySell
                btnName={"Sell"}
                stockPrice={buyprice}
            />
        </div>
    )
}

export default UserStock


