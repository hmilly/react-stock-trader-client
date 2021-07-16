import React from 'react'

const UserStockDetails = ({ quantity, price }) => {

    const sellStock = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <p>{quantity}</p>
            <p>{price}</p>
            <button className="Sell" onClick={(e) => sellStock(e)}>Sell</button>
        </div>
    )
}

export default UserStockDetails
