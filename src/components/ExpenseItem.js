import ExpenseDate from "./ExpenseDate";
import "../assets/style/expense-item.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$300</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
