import Expenses from "./components/Expenses";
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

  return (
    <div className="App">
      <h1>This is my first React app!!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
