import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2020");
  const dateSelected = (selectedDate) => {
    console.log(selectedDate);
    setFilterDate(selectedDate);
  };
  const filteredData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  });
 
 
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterDate}
        onDateSelected={dateSelected}
      ></ExpensesFilter>
      <ExpensesList items = {filteredData}></ExpensesList>
    </Card>
  );
}
export default Expenses;
