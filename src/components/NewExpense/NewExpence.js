import React from 'react'
import './NewExpense.css';
// import  './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpence=(props)=> {
const SaveExpenseDataHandler =(enteredExpenseData) => {
    const expenseData ={
        ...enteredExpenseData,
        id:Math.random() .toString()
    }
    props.onAddExpense(expenseData);
}

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} ></ExpenseForm>
    </div>
  )
}

export default NewExpence