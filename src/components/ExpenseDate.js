import "../assets/style/expense-date.css";

const ExpenseDate = () => {
  return (
    <div className="expense-date">
      <div className="expense-date__day">day</div>
      <div className="expense-date__month">month</div>
      <div className="expense-date__year">year</div>
      <button onClick={() => console.log("hello")}>text</button>
    </div>
  );
};

export default ExpenseDate;
