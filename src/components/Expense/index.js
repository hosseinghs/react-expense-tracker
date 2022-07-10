import { useState } from "react";
import ExpenseList from "./List";
import ExpenseFilter from "./Filter";
import "../../assets/style/expense/expenses.css";

const Expense = ({ mockData }) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterYear = (year) => {
    setSelectedYear(year);
  };

  const filterdExpense = mockData.filter(
    (expense) =>
      new Date(expense.date).getFullYear().toString() === selectedYear
  );

  return (
    <div className="expenses">
      <ExpenseFilter selectedYear={selectedYear} filterYear={filterYear} />
      <ExpenseList items={filterdExpense} />
    </div>
  );
};

export default Expense;
