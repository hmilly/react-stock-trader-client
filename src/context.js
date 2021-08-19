import React,
{ createContext, useReducer }
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

    const findArrItem = (arr, item) => arr.find(s => s.stockName.match(item))

    const setArr = (obj) => {
        const currentStockArr = findArrItem(state.stockArr, obj.stockName)
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

    const removeFromArr = (data) => {
        let currentStockArr = findArrItem(state.stockArr, data.company)
        const i = currentStockArr.details.indexOf(data)
        currentStockArr.details.splice(i, 1)
        dispatchArr(state.stockArr)
    }

    const cash = () => {


        setBalance()
    }


    const dispatchArr = (arr) => {
        dispatch({
            type: "SETARR",
            payload: [...arr]
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
            setBalance,
            removeFromArr,
            cash
        }}>
        {children} </Provider>;
};

export { store, AppState }