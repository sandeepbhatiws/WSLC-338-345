import React, { useState } from 'react'

export default function HideShow() {

    const [a, setType] = useState('password');

    const changePassword = () => {
        if(a == 'password'){
            setType('text');
        } else {
            setType('password');
        }
    };

  return (
    <div>
      <input type={ a } />
      <button onClick={ changePassword }>{ (a == 'password') ? 'Show' : 'Hide' }</button>
    </div>
  )
}
