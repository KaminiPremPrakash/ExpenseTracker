import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialState= {
    transactions : []
}

//create context to be used across components

export const GlobalContext = createContext(initialState);

//need to wrap every component inside App.js inside a global provider
export const GlobalProvider = ({children}) =>{

    //actions
    function deleteTransaction(id){
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

     //actions
     function addTransaction(transaction){
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)
    return(<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)

}