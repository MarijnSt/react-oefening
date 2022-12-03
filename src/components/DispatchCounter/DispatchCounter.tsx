import React, { useReducer, useRef } from "react";
import { Container, Controls, Reset, CustomInput } from "./Counter.styles";

//Uee useReducer
const intialCount = 12;

type Actions =
  | { type: "controlChange"; payload: number }
  | { type: "reset" }
  | { type: "customChange" };

const DispatchCounter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const countReducer = (count: number, action: Actions) => {
    let returnValue = 0;
    switch (action.type) {
      case "controlChange":
        returnValue = count + action.payload;
        break;
      case "reset":
        returnValue = intialCount;
        break;
      case "customChange":
        returnValue = inputRef.current?.value ? count + +inputRef.current?.value : count;
        break;
      default:
        returnValue = count;
    }
    if (returnValue % 11 === 0) {
      return 0;
    } else {
      return returnValue;
    }
  };

  const [count, dispatch] = useReducer(countReducer, intialCount);

  return (
    <Container>
      <div>
        <p>{count}</p>
      </div>
      <Controls>
        <button onClick={() => dispatch({ type: "controlChange", payload: -5 })}> -5 </button>
        <button onClick={() => dispatch({ type: "controlChange", payload: -1 })}> -1 </button>
        <button onClick={() => dispatch({ type: "controlChange", payload: 1 })}> +1 </button>
        <button onClick={() => dispatch({ type: "controlChange", payload: 5 })}> +5 </button>
      </Controls>
      <Reset onClick={() => dispatch({ type: "reset" })}>RESET</Reset>
      <CustomInput>
        <input type="number" ref={inputRef} />
        <button onClick={() => dispatch({ type: "customChange" })}>ADD</button>
      </CustomInput>
    </Container>
  );
};

export default DispatchCounter;
