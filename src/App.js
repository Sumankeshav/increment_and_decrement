import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleButtonClick(actionType, stateSetter, value) {
    if (actionType === "increment") {
      stateSetter((prev) => prev + value);
    } else if (actionType === "decrement") {
      stateSetter((prev) => prev - value);
    }
  }

  return (
    <div className="App">
      <div>
        {step !== 0 ? (
          <button onClick={() => handleButtonClick("decrement", setStep, 1)}>
            -
          </button>
        ) : (
          ""
        )}
        <span>Step: {step}</span>
        <button onClick={() => handleButtonClick("increment", setStep, 1)}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("decrement", setCount, step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button onClick={() => handleButtonClick("increment", setCount, step)}>
          +
        </button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
