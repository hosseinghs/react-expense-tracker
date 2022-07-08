import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 0, title: "car insurance", amount: 2000, date: "2020-4-22" },
    { id: 1, title: "health insurance", amount: 175, date: "2021-2-25" },
    { id: 2, title: "rent", amount: 5000, date: "2022-5-1" },
  ]);

  const saveExpenseItem = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <>
      <NewExpense onSaveExpenseData={saveExpenseItem} />
      <Expenses mockData={expenses} />
    </>
  );
}

export default App;
