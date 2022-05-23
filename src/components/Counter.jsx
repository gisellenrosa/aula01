import { useState } from "react";

// Imutabilidade - Uma variável nao vai poder ter o valor alterado
//ela sempre recebe um novo valor!!


export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
   setCounter(counter + 1 );
  }
  return (
    <div>
      <button type="button" onClick={increment}>
        Increment {counter}
      </button>
    </div>
  );
}
