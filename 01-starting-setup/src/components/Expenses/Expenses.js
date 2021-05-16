import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2020");
  const dateSelected = (selectedDate) => {
    console.log(selectedDate);
    setFilterDate(selectedDate);
  };
  const filteredData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  });
  let expenseContent = <p>No expenses found</p>;
  if (filteredData.length > 0) {
    expenseContent = filteredData.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      ></ExpenseItem>
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterDate}
        onDateSelected={dateSelected}
      ></ExpensesFilter>
      {expenseContent}
    </Card>
  );
}
export default Expenses;
