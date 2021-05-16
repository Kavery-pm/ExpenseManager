import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const [isEditing, setisEditing] = useState(false);
  const startEditing = () => {
    setisEditing(true);
  };
  const stopEditing = () =>{
    setisEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={startEditing}>Add new Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
