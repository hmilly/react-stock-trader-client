import React, { useContext } from 'react'
import BuySell from "./BuySell"
import { store } from "../context"

const CompanyStock = ({ companyName, stockPrice }) => {
    const { state } = useContext(store)
    let n = stockPrice.toFixed(2)
    
    return (
        <div className="stock">
            <p className="stock-name">{companyName}</p>
            <h3 className="stock-price">{n}</h3>
            <BuySell
                btnName={"Buy"}
                stockPrice={n}
                stockName={companyName}
            />
        </div>
    )
}

export default CompanyStock
