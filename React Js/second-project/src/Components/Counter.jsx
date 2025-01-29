import React, { useState } from 'react'

export default function Counter() {

    var [count, setCount] = useState(0);

    const increment = () => {
        if(count < 10){
            count++;
            setCount(count);
        }
        
        console.log(count);
    }

    const decrement = () => {
        count--;
        setCount(count);
        console.log(count);
    }

  return (
    <div>
      <button onClick={ increment }>+</button>
      <button>{ count }</button>
      <button onClick={ decrement }>-</button>
    </div>
  )
}
