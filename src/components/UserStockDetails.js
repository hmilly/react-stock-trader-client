import React, { useContext } from 'react'
import { store } from "../context"

const UserStockDetails = ({ data, company, stock }) => {
    const { state, setBalance, removeFromArr } = useContext(store)
    console.log(stock)

    const sellStock = (e) => {
        e.preventDefault();
        const curr = stock.find(arr => arr.stockName === company)
        const equation = parseFloat(state.balance) + ((parseInt(data.quantity) * parseFloat(curr.currentPrice)))
        setBalance(equation.toFixed(2))
        removeFromArr(data, company)
    }

    return (
        <div>
            <p>{data.quantity} @</p>
            <p>{data.price}</p>
            <button className="Sell" onClick={(e) => sellStock(e)}>Sell</button>
        </div>
    )
}

export default UserStockDetails
