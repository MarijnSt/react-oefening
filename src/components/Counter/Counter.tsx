import React, { useEffect, useRef } from "react";
import { Container, Controls, Reset, CustomInput } from "./Counter.styles";

const intialCount = 12;

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number>(intialCount);

  const handleControlChange = (e: React.MouseEvent) => {
    setCount(count + +e.currentTarget.innerHTML);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleCustomChange = () => {
    if (inputRef.current?.value) {
      setCount(count + +inputRef.current?.value);
    }
  };

  useEffect(() => {
    if (count % 11 === 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <Container>
      <div>
        <p>{count}</p>
      </div>
      <Controls>
        <button onClick={handleControlChange}> -5 </button>
        <button onClick={handleControlChange}> -1 </button>
        <button onClick={handleControlChange}> +1 </button>
        <button onClick={handleControlChange}> +5 </button>
      </Controls>
      <Reset onClick={() => setCount(intialCount)}>RESET</Reset>
      <CustomInput>
        <input type="number" ref={inputRef} />
        <button onClick={handleCustomChange}>ADD</button>
      </CustomInput>
    </Container>
  );
};

export default Counter;
