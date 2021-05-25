import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const { addTransaction } = useContext(GlobalContext)
 
 
    const onSubmit = e =>{
        e.preventDefault();
        const newTransaction = {
        id: Math.floor(Math.random()* 100000000),
        text,
        amount: +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount("")
    }

    return (
        <>
          <h3>Add a new Transaction</h3>
          <form onSubmit={onSubmit}>
              <div className="form-control">
                  <label htmlFor="text">Text</label>
                  <input type="text" value={text} onChange={e=> setText(e.target.value)} placehold="Enter text..."/>
              </div>
              <div className="form-control">
              <label htmlFor="amount"
            >Amount <br />
             ( can be positive as well as negative )</label>
                  <input type="number" value={amount}  onChange={e=> setAmount(e.target.value)} placehold="Enter amount..."/>
              </div>
              <button className="btn" >Add Transaction</button> 
          </form>
        </>
    )
}
