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
        if (!findStock) {
            dispatchArr(state.stockArr, obj)
        } else {
            const allObjects = state.stockArr
            const index = allObjects.indexOf(findStock)
            let edited = allObjects.splice(index, 1)
            edited = { ...findStock, details: [...findStock.details, ...obj.details]}
            dispatchArr(allObjects, edited)
        }
    }

    const dispatchArr = (arr, obj) => {
        dispatch({
            type: "SETARR",
            payload: [...arr, obj]
        })
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