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
            case 'REMOVE':
                return {
                    ...state,
                    stockArr: action.payload
                }
            default:
                return state
        }
    }, initialState);



    const setArr = (obj) => {

        const findStock = state.stockArr.find(s => s.stockName.match(obj.stockName))
        if (!findStock) {
            console.log(obj)
            dispatchArr(state.stockArr, { ...obj, details: [{ id: 1, ...obj.details[0] }] })
        } else {
            const allObjects = state.stockArr
            const index = allObjects.indexOf(findStock)
            let edited = allObjects.splice(index, 1)
            const n = { id: findStock.details.length+1, ...obj.details[0] }

            edited = { ...findStock, details: [...findStock.details, n] }
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

    const removeFromArr = (details) => {
        console.log(details)
        // dispatch({
        //     type: "REMOVE",
        //     payload: details
        // })
    }

    return <Provider
        value={{
            state,
            setArr,
            setBalance,
            removeFromArr
        }}>
        {children} </Provider>;
};

export { store, AppState }