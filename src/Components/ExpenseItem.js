import React, { useContext } from 'react'
import {TiDelete} from "react-icons/ti"
import { AppContext } from '../Context/AppContext'

function ExpenseItem(props) {
  const {dispatch} = useContext(AppContext);
 
  const handleDeleteExpense = () => {
    dispatch({
      type : "DELETE_EXPENSE",
      payload : props.id
    })
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center' >
      {props.name}
      <div>
        <span style = {{marginRight : "50px"}}>
					${props.cost}
				</span>
        <TiDelete onClick={handleDeleteExpense} size = "1.5em"></TiDelete>
      </div>
    </li>
  )
}

export default ExpenseItem