import React, { useContext, useEffect } from 'react'
import { CommonContext } from '../ContextAPI/Context'
import { useNavigate } from 'react-router-dom';

export default function PlayQuiz() {

  let { isLogin, setIsLogin } = useContext(CommonContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogin){
      navigate('/login');
    }
  },[]);



  return (
    <div>
      
    </div>
  )
}
