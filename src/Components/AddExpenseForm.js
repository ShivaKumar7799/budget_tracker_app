import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import { v4 as uuidv4 } from 'uuid';

function AddExpenseForm() {
  const {dispatch} = useContext(AppContext)
  const [name,setName] = useState('');
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id : uuidv4(),
      name : name,
      cost : parseInt(cost)
    }

    dispatch({
      type : "ADD_EXPENSE",
      payload : expense
    })
  } 

  return (
    <form onSubmit={onSubmit} >
      <div className='row'>
        <div className='col-sm' >
          <label htmlFor='name'>Name</label>
          <input type="text" className='form-control' value={name} onChange = {(event) => setName(event.target.value)} id='name' required />
        </div>
        <div className='col-sm' >
          <label htmlFor='cost'>Cost</label>
          <input type="text" className='form-control' value={cost} onChange = {(event) => setCost(event.target.value)} id='cost' required />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm' >
          <button type='submit' className='btn btn-primary mt-3' >Save</button>
        </div>
      </div>
    </form>
  )
}

export default AddExpenseForm