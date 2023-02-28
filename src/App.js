import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Instructions from "./components/Instructions";

export default function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, name: "Counter top" },
    { id: 2, value: 20, name: "Counter middle" },
    { id: 3, value: 30, name: "Counter bottom" }
  ]);

  const handleCounterIncrease = (id) => {
    const newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    );
    setCounters(newCounters);
  };

  // works as const and as function
  function handleCounterDecrease(id) {
    const newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    );
    setCounters(newCounters);
  }

  function increaseAll() {
    // functional state update - setState() allows 2 ways of using it:
    // 1) we provide the value to be set
    // 2) we provide a function that takes 1 argument - this will be the previous state
    setCounters((prevCounters) =>
      prevCounters.map((prevCounter) => ({
        ...prevCounter,
        value: prevCounter.value + 1
      }))
    );
  }

  function decreaseAll() {
    setCounters(
      counters.map((counter) => ({ ...counter, value: counter.value - 1 }))
    );
  }

  return (
    <>
      <div className="block">
        <Instructions />
      </div>

      <div className="block">
        <div className="counters-container">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              name={counter.name}
              value={counter.value}
              // we can have different attribute name / function name
              handleIncrease={handleCounterIncrease}
              handleDecrease={handleCounterDecrease}
            />
          ))}
        </div>
        <hr />
        <div className="controls-container">
          <input
            type="button"
            value="-- Decrease All --"
            onClick={decreaseAll}
          />
          <input
            type="button"
            value="++ Increase All ++"
            onClick={increaseAll}
          />
        </div>
      </div>
    </>
  );
}
