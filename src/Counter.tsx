import { useEffect, useState } from "react";

export type CounterProps = {
  initialValue?: number;
  increment?: number;
};

export function Counter({ initialValue = 0, increment = 1 }: CounterProps) {
  const [counter, setCounter] = useState<number>(initialValue);

  const incrementa = () => {
    setCounter((c) => c + increment);
  };
  const decrementa = () => {
    setCounter((c) => c - increment);
  };
  const resetCounter = () => {
    setCounter((c) => (c = initialValue));
  };

  useEffect(() => {
    console.log(`Il contatore è a ${counter}`);
  }, [counter]);

  return (
    <div>
      Counter: {counter}
      <button onClick={incrementa}>Incrementa</button>
      <button onClick={decrementa}>Decrementa</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
