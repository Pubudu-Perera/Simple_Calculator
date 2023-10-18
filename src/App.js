import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState(0);
  const inputRef = useRef();

  const add = () => {
    setResult((result) => result + Number(inputRef.current.value));
  };
  const substract = () => {
    setResult((result) => result - Number(inputRef.current.value));
  };
  const multiply = () => {
    setResult((result) => result * Number(inputRef.current.value));
  };
  const divide = () => {
    setResult((result) => result / Number(inputRef.current.value));
  };
  const resetValue = () => {
    inputRef.current.value = null;
  };
  const resetResult = () => {
    setResult((prevVlue) => prevVlue * 0);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <p>{result}</p>

      <form onSubmit={(e) => e.preventDefault(true)}>
        <input ref={inputRef} type="number" id="marks" />
        <br />
        <br />

        <div className="button-group">
          <button onClick={add}>ADD</button>
          <button onClick={substract}>SUBSTRACT</button>
          <button onClick={multiply}>MULTIPLY</button>
          <button onClick={divide}>DIVIDE</button>
          <button onClick={resetValue}>RESET INPUT</button>
          <button onClick={resetResult}>RESER RESULT</button>
        </div>
      </form>
    </div>
  );
}
