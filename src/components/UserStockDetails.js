import React, { useContext } from 'react'
import { store } from "../context"

const UserStockDetails = ({ data, company }) => {
    const { state, setBalance, removeFromArr } = useContext(store)

    const sellStock = (e, data, company) => {
        e.preventDefault();
        const equation = parseFloat(state.balance) + (parseInt(data.quantity) * parseFloat(data.price))
        setBalance(equation.toFixed(2))
        removeFromArr(data, company)
    }
    return (
        <div>
            <p>{data.quantity}</p>
            <p>{data.price}</p>
            <button className="Sell" onClick={(e) => sellStock(e, data, company)}>Sell</button>
        </div>
    )
}

export default UserStockDetails
