import React from 'react';

interface Props {
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => void;
  value: number;
}

export default function Counter(props: Props) {
  return (
    <div>
      <button onClick={props.increment}>
        +1
      </button>
      <button onClick={props.decrement}>
        -1
      </button>
      <button onClick={props.incrementAsync}>
        async +1
      </button>
      <div>
        Count: {props.value}
      </div>
    </div>
  )
}
