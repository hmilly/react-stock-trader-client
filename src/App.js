import React, { useState, useEffect, useContext } from "react";
import { store } from "./context"
import socketIOClient from "socket.io-client";
import Company from "./components/Company"
import User from "./components/User"
import { defaultUser } from "./db";
import './App.scss';
const ENDPOINT = "http://127.0.0.1:4001";
// npm start

function App() {
  const { setName, setBalance } = useContext(store)
  const [stock, setStock] = useState([]);
  const [closedMsg, setClosedMsg] = useState("")
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("updateStock", data => {
      setStock(data);
      console.log(data)
    });
    socket.on("closedMarkets", msg => {
      setClosedMsg(msg)
      return socket.disconnect()
    });
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
      return socket.disconnect()
    });
  }, [setName, setBalance]);

  useEffect(() => {
    setName(defaultUser.name)
    setBalance(defaultUser.balance)
    setTransactions(defaultUser.transactions)
  }, [setName, setBalance]);

  return (
    <div className="index">
      <header>
        <h1>Stock Trader</h1>
        <p>Enter a name below and play the stock markets.
          See how much you can make, with an initial kitty of $5,000
        </p>
        <h4>{closedMsg}</h4>
      </header>
      <main>
        <Company stock={stock} />
        <User transactions={transactions} setTransactions={setTransactions} stock={stock} />
      </main >
    </div>
  );
}

export default App;