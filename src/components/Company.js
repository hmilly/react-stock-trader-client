import React from 'react'
import CompanyStock from "./CompanyStock"

const Company = ({ stock }) => {

    const injectData = (d) => {
        return d.map(s =>
            <CompanyStock
                companyName={s.stockName}
                stockPrice={s.currentPrice}
            />
        )
    }

    return (
        <section>
            <h2>Companies available:</h2>
            <div className="stock-container">
                {stock === []
                    ? ""
                    : injectData(stock)}
            </div>
        </section>
    )
}

export default Company