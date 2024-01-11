import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../App';
import ToDoHome from './ToDoHome';
export const Home = () => {
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogout=()=>{
      console.log('successfully logged out');
      sessionStorage.removeItem('token')
      localStorage.removeItem('email')
      setUser("")
      navigate('/login'); 
  }


  return (
    <div className='box'>
          {user?(
            <div>
              <button className='btn btn-secondary btn-md'
                onClick={handleLogout}>
                LOGOUT
              </button>
              <ToDoHome/>
              
            </div>
          ):(
            <button className='btn btn-primary btn-md'
              onClick={()=>navigate('/login')}>
                {console.log('loginuser',user)}
              LOGIN
            </button>
          )}
    </div>
  )
}
