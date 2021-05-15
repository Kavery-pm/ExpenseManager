import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2020");
  const dateSelected = (selectedDate) => {
    setFilterDate(selectedDate);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterDate}
        onDateSelected={dateSelected}
      ></ExpensesFilter>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
}
export default Expenses;
