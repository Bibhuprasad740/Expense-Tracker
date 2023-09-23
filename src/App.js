import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Laptop Insurance",
    amount: 1000,
    date: new Date(2023, 8, 15),
  },
  {
    id: 2,
    title: "Watch",
    amount: 2200,
    date: new Date(2023, 2, 8),
  },
  {
    id: 3,
    title: "Shoe",
    amount: 999,
    date: new Date(2023, 6, 16),
  },
  {
    id: 4,
    title: "Sweets",
    amount: 360,
    date: new Date(2023, 6, 16),
  },
  {
    id: 5,
    title: "Nike Shoe",
    amount: 2900,
    date: new Date(2022, 6, 16),
  },
  {
    id: 6,
    title: "Cooler",
    amount: 1200,
    date: new Date(2022, 3, 29),
  },
  {
    id: 7,
    title: "Induction",
    amount: 1500,
    date: new Date(2021, 9, 7),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => [expenseData, ...prevState]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
