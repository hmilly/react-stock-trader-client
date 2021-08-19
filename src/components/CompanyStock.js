import React from 'react'
import BuySell from "./BuySell"

const CompanyStock = ({ company, price }) => {
    let n = price.toFixed(2)

    return (
        <div className="stock">
            <p className="stock-name">{company}</p>
            <h3 className="stock-price">{n}</h3>
            <BuySell btnName={"Buy"} price={n} company={company} />
        </div>
    )
}

export default CompanyStock
