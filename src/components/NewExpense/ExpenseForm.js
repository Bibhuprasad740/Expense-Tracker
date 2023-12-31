import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (keyStrokeObject) => {
    setEnteredTitle(keyStrokeObject.target.value);
  };

  const amountChangeHandler = (keyStrokeObject) => {
    setEnteredAmount(keyStrokeObject.target.value);
  };

  const dateChangeHandler = (keyStrokeObject) => {
    setEnteredDate(keyStrokeObject.target.value);
  };

  const clearUserInput = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const submitForm = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onFormSubmit(expenseData);
    clearUserInput();
  };

  const toggleShowFormHandler = () => {
    setShowForm(!showForm);
  };

  return showForm ? (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-09-19"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <div>
          <button onClick={toggleShowFormHandler}>Cancel</button>
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  ) : (
    <div className="new-expense__controls">
      <div>
        <button onClick={toggleShowFormHandler}>Add New Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;
