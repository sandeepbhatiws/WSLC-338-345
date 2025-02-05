import React, { useContext, useState } from 'react'
import { CommonContext } from '../ContextAPI/Context';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';

export default function GoogleLogin() {

  let [formStatus, setFormStatus] = useState(false);
  let { isLogin, setIsLogin } = useContext(CommonContext);
  const navigate = useNavigate();

  const googleLogin = () => {
    setFormStatus(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        toast.success('User Login successfully !!');
        setFormStatus(false);
        localStorage.setItem('userLogin',JSON.stringify(user));
        setIsLogin(true);
        navigate('/play-quiz');

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        toast.error(errorMessage);
        setFormStatus(false);
      });
  }

  return (
    <div className='mt-5'>

      {formStatus
        ?
        <button type="button" class=" w-full justify-center inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </button>
        :
        <button onClick={googleLogin}
          type="button"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login with Google
        </button>
      }

      
    </div>
  )
}
