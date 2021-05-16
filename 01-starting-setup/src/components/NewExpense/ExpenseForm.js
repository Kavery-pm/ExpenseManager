import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");
  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
   
    const expenseData = {
      title: title,
      amount: amount,
      date:new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022"
            onChange={dateChangedHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">New Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
