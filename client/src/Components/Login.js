import React, {useState, useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import { useContext } from 'react';
import { MyContext } from '../App';

export const Login = () => {
  const { user, setUser } = useContext(MyContext);

  const navigate = useNavigate();
  const location = useLocation();
  const {search} = location;

  const [email, setEmail] = useState('');

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [infoMsg, setInfoMsg] = useState('');

  const [initialLoading, setInitialLoading] = useState(false);
  const [initialError, setInitialError] = useState('');

  useEffect(()=>{
    if(user){
      // user is already signed in
      navigate('/');
    }
    else{
      // user is not signed in but the link is valid
      if(localStorage.getItem('email')){
        // now in case user clicks the email link on a different device, we will ask for email confirmation
        let email = localStorage.getItem('email');
        // after that we will complete the login process
        axios.post('http://localhost:4000/user/verify',{email,oobCode:window.location.href})
        .then((res)=>{
          // we can get the user from result.user but no need in this case
          console.log(res);
          setInitialLoading(false);
          setInitialError('');
          sessionStorage.setItem('token',res.data.token)
          setUser(res.data)
          navigate('/');
        }).catch((err)=>{
          setInitialLoading(false);
          setInitialError(err.message);
          navigate('/login');
        })
      }
    }
  },[user, search, navigate]);

  const handleLogin=(e)=>{
    e.preventDefault();
    setLoginLoading(true);
    axios.post('http://localhost:4000/user/login',{email}
    ).then((res)=>{
      console.log("login res",res)
      localStorage.setItem('email', email);
      setLoginLoading(false);
      setLoginError('');
      setInfoMsg(res.data);
    }).catch(err=>{
      setLoginLoading(false);
      setLoginError(err.message);
    })
  }

  return (
    <div className='box'>
      {initialLoading?(
        <div>Loading...</div>
      ):(
        <>
          {initialError!==''?(
            <div className='error-msg'>{initialError}</div>
          ):(
            <>
              {/* We are checking user because for a split second, we will not have user */}
              {user?(
                // so instead of seeing form, I am using this please wait msg
                <div>Please wait...</div>
                
              ):(
                // for a split second we will see this form
                <form className='form-group custom-form' onSubmit={handleLogin}>
                  <label>Email</label>
                  <input type={'email'} required placeholder='Enter Email'
                  className='form-control'
                  value={email||''} onChange={(e)=>setEmail(e.target.value)}/>
                  <button type='submit' className='btn btn-success btn-md'>
                    {loginLoading?(
                      <span>Logging you in{console.log(window.location.href)}</span>
                    ):(
                      <span>Login{console.log(window.location.href)}</span>
                    )}
                  </button>
                  {/* show login error msg */}
                  {loginError!==''&&(
                    <div className='error-msg'>{loginError}</div>
                  )}

                  {/* show info msg */}
                  {infoMsg!==''&&(
                    <div className='info-msg'>{infoMsg}</div>
                  )}
                </form>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}
