import React from 'react'
import CompanyStock from "./CompanyStock"

const Company = ({ stock }) => {
    
    const injectData = (data) =>
        data.map(company =>
            <CompanyStock company={company.stockName} price={company.currentPrice}
            />
        )

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