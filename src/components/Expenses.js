import ExpenseItem from "./ExpenseItem";
import "../assets/style/expenses.css";

const Expense = ({mockData}) => {
 
  return (
    <div className="expenses">
      {mockData.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </div>
  );
};

export default Expense;
