import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "../assets/style/expenses.css";

const Expense = ({ mockData }) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="expenses">
      <div>
        <ExpenseFilter selectedYear={selectedYear} filterYear={filterYear} />
      </div>
      {mockData.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </div>
  );
};

export default Expense;
