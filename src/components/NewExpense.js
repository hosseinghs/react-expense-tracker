import { useState } from "react";
import "../assets/style/expense-new.css";

const NewExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const clearStates = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount,
      date: new Date(date),
    };
    clearStates();
  };

  return (
    <form className="new-expense" onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onKeyUp={(e) =>
              setTimeout(() => {
                setTitle(e.target.value);
              }, 200)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onKeyUp={(e) => setTimeout(() => setAmount(e.target.value), 200)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpense;