import React, { useContext } from 'react'
import UserStock from "./UserStock"
import { store } from "../context"

const User = ({ transactions }) => {
    const { state, setName, setBalance, dispatchArr } = useContext(store)

    const injectData = (transaction) => {
        return transaction.map(stock =>
            <UserStock
                company={stock.shareName}
            />
        )
    }

    const resetForm = (e, setBalance, setArr, setName) => {
        e.preventDefault()
        setName("")
        setBalance(5000)
        setArr([])
    }

    return (
        <form>
            <h2>Details:</h2>
            <div className="user-details">
                <h3>User:</h3>
                <input type="text" name="name" placeholder="Name" className="username" value={state.user}
                    onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="user-wallet">
                <h3>Current balance:</h3>
                <h3 className="user-balance">
                    ${state.balance}</h3>
                <h3>Original kitty:</h3>
                <h3 className="user-total">
                    $5,000</h3>
            </div>
            <h2>Companys invested in:</h2>
            <div className="stock-container">
                {transactions === []
                    ? ""
                    : injectData(transactions)}
            </div>
            <div className="user-btns">
                <button onClick={(e) => { resetForm(e, setBalance, dispatchArr, setName) }}>Reset Form</button>
                <button>Save User</button>
            </div>
        </form>
    )
}

export default User