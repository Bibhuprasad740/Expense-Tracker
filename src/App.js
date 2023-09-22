import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

function App() {
  const expenses = [
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
  ];

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
    console.log("Adding a new expense...");
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
