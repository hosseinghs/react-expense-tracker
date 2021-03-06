import ExpenseDate from "./Date";
import "../../assets/style/expense/item.css";

const ExpenseItem = ({ title, amount, date }) => {
  const _amount = amount.toLocaleString("en-US");
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${_amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
