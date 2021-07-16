import React, { useContext } from 'react'
import BuySell from "./BuySell"
import { store } from "../context"

const CompanyStock = ({ companyName, stockPrice }) => {
    const { state } = useContext(store)

    return (
        <div className="stock">
            <p className="stock-name">{companyName}</p>
            <h3 className="stock-price">{stockPrice}</h3>
            <BuySell
                btnName={"Buy"}
                stockPrice={stockPrice}
                stockName={companyName}
            />
        </div>
    )
}

export default CompanyStock
