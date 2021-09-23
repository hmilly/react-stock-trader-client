import React, { useContext } from 'react'
import UserStock from "./UserStock"
import { user } from '../db'
import { store } from "../context"

const User = ({ transactions, setTransactions, stock }) => {
    const { state, setName, setBalance, dispatchArr } = useContext(store)

    const injectData = (transaction) => {
        return transaction.map(s =>
            <UserStock company={s.shareName} stock={stock} />
        )
    }

    const resetForm = (e) => {
        e.preventDefault()
        setName("")
        setBalance(5000)
        dispatchArr([])
    }

    const saveUser = (e) => {
        e.preventDefault()
        //set user 
        console.log("save")
    }

    const restoreUser = (e) => {
        e.preventDefault()
        setName(user.name)
        setBalance(user.balance)
        setTransactions(user.transactions)
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
                <button onClick={(e) => resetForm(e)}>Reset Form</button>
                <button onClick={(e) => restoreUser(e)}>Restore Last User</button>
                <button onClick={(e) => saveUser(e)}>Save User</button>
            </div>
        </form>
    )
}

export default User