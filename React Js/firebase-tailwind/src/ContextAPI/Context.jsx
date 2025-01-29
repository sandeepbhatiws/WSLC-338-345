import React, { useContext, useState } from 'react'
import { createContext } from 'react';

var CommonContext = createContext();

export default function Context({children}) {

    const checkLogin = JSON.parse(localStorage.getItem('userLogin'));
    const [isLogin, setIsLogin] = useState((checkLogin) ? true : false);

    let data = { isLogin, setIsLogin }

  return (
    <>
        <CommonContext.Provider value={data}>
            {children}
        </CommonContext.Provider>
    </>
  )
}

export { CommonContext };