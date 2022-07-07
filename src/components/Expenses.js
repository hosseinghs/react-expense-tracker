import ExpenseItem from "./ExpenseItem";
import "../assets/style/expenses.css";

const Expense = () => {
  return (
    <div className="expenses">
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
};

export default Expense;
