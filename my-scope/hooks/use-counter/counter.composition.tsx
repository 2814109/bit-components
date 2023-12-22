import { useCounter } from './use-counter';

export function Counter() {
  const { count, increment } = useCounter();
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
    </div>
  );
}
