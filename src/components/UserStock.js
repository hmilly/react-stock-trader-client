import React, { useContext} from 'react'
import { store } from "../context"
import UserStockDetails from "./UserStockDetails"

const UserStock = ({ company }) => {
    const { state } = useContext(store)

    return (
        <div className="user-stock">
            <h4 className="stock-name">{company}:</h4>
            <div className="stock-price">

                {state.stockArr.length === 0
                    ? ""
                    : state.stockArr.map(a => {
                        return a.stockName.match(company)
                            ? a.details.map(data =>
                                <UserStockDetails data={data} />
                            )
                            : ""
                    })
                }
            </div>
        </div>
    )
}

export default UserStock
