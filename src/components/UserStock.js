import React, { useContext} from 'react'
import { store } from "../context"
import UserStockDetails from "./UserStockDetails"

const UserStock = ({ company, stock }) => {
    const { state } = useContext(store)

    return (
        <div className="user-stock">
            <h4 className="stock-name">{company}:</h4>
            <div className="stock-price">
                {state.stockArr.length === 0
                    ? ""
                    : state.stockArr.map(arr => {
                        return arr.company.match(company)
                            ? arr.details.map(data =>
                                <UserStockDetails data={data} company={company} stock={stock} />
                            )
                            : ""
                    })
                }
            </div>
        </div>
    )
}

export default UserStock
