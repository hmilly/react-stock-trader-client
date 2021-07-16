import React,
{ createContext, useEffect, useReducer, useState }
    from 'react';

const initialState = {
    user: "",
    balance: 5000,
    stockArr: []
}

const store = createContext(initialState);
const { Provider } = store;

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SETARR':
                return {
                    ...state,
                    stockArr: action.payload
                }
            case 'SETBALANCE':
                return {
                    ...state,
                    balance: action.payload
                }
            default:
                return state
        }
    }, initialState);



    const setArr = (obj) => {

        const findStock = state.stockArr.find(s => s.stockName.match(obj.stockName))
        console.log(findStock)
        if (!findStock) {
            dispatchArr(obj)
        } else {



            // dispatchArr({ ...obj, quantity: findStock.quantity + obj.quantity })



            
        }
    }

    const dispatchArr = (arr) => {
        dispatch({
            type: "SETARR",
            payload: [...state.stockArr, arr]
        })
        console.log(state.stockArr)
    }

    const setBalance = (equation) => {
        dispatch({
            type: "SETBALANCE",
            payload: equation
        })
    }

    return <Provider
        value={{
            state,
            setArr,
            setBalance
        }}>
        {children} </Provider>;
};

export { store, AppState }