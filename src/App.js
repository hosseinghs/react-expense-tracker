import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  const [mockData, setMockData] = useState([
    { id: 0, title: "car insurance", amount: 2000, date: "2020-4-22" },
    { id: 1, title: "health insurance", amount: 175, date: "2021-2-25" },
    { id: 2, title: "rent", amount: 5000, date: "2022-5-1" },
  ]);

  const saveExpenseItem = (expense) => {
    console.log(mockData);
  };

  return (
    <>
      <NewExpense onSaveExpenseData={saveExpenseItem} />
      <Expenses mockData={mockData} />
    </>
  );
}

export default App;
