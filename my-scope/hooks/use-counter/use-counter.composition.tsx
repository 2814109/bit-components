import { useCounter } from './use-counter';
export const BasicuseCounter = () => {
  const { count, increment } = useCounter();

  return (
    <>
      <h1>This count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
