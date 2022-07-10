import Item from "./Item";
import "../../assets/style/expense/list.css";

const ExpenseList = ({ items }) => {
  if (items.length === 0)
    return <h2 className="expenses-list__fallback">Found no Data!</h2>;

  return (
    <ul className="expenses-list">
      {items.map(({ id, title, amount, date }) => (
        <Item key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpenseList;
