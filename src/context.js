import React, { createContext, useReducer } from 'react';

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
            case 'SETNAME':
                return {
                    ...state,
                    user: action.payload
                }
            default:
                return state
        }
    }, initialState);

    const findArrItem = (arr, item) => arr.find(s => s.company.match(item))

    const setArr = (obj) => {
        const currentStockArr = findArrItem(state.stockArr, obj.company)
        if (!currentStockArr) {
            dispatchArr([...state.stockArr, { ...obj, details: [{ id: 1, ...obj.details[0] }] }])
        } else {
            const allObjects = state.stockArr
            const index = allObjects.indexOf(currentStockArr)
            let editedArr = allObjects.splice(index, 1)
            const n = { id: currentStockArr.details.length + 1, ...obj.details[0] }
            editedArr = { ...currentStockArr, details: [...currentStockArr.details, n] }
            dispatchArr([...allObjects, editedArr])
        }
    }

    const removeFromArr = (data, company) => {
        let currentStockArr = findArrItem(state.stockArr, company)
        const i = currentStockArr.details.indexOf(data)
        currentStockArr.details.splice(i, 1)
        return dispatchArr(state.stockArr)
    }

    const dispatchArr = (arr) => {
        dispatch({
            type: "SETARR",
            payload: [...arr]
        })
    }

    const setBalance = (num) => {
        dispatch({
            type: "SETBALANCE",
            payload: num
        })
    }
    const setName = (name) => {
        dispatch({
            type: "SETNAME",
            payload: name
        })
    }

    return <Provider
        value={{
            state,
            setArr,
            setBalance,
            dispatchArr,
            removeFromArr,
            setName
        }}>
        {children} </Provider>;
};

export { store, AppState }