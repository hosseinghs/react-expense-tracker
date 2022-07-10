import "../../assets/style/expense/date.css";

const ExpenseDate = ({ date }) => {
  const day = new Date(date).getDay();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
