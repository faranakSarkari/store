
import React, { useState,useContext } from 'react'
import AuthContext from '../../utils/authcontext';



export default function Login() {
    const [loginRegister, setLoginRegister] = useState(false);
    const [emailVal,setEmailVal]=useState("")
    const [passwordVal,setPasswordVal]=useState("")
    const [error,setError]=useState("")
    const [message,setMessage]=useState(false)
    const {setUserName} = useContext(AuthContext)
    const {setLogin}=useContext(AuthContext)
    function getData(){
        fetch(
            `http://localhost:3001/users?emailValue=${emailVal}&passwordValue=${passwordVal}`
          )
            .then((res) => res.json())
            .then((data) => {
             if( data.length > 0){ setLogin(true); setUserName(emailVal); setMessage(true)}
             else{
              setError("wrong validation")
              setTimeout(() => {
                setError("")
              }, 3000);
            }
            })
            .catch(() => {
              setError("Error occurred while logging in")
            });
    }
  return (
  

      <>
        <input type="email" onChange={(e)=>setEmailVal(e.target.value)}></input>
        <input type="password" onChange={(e)=>setPasswordVal(e.target.value)}></input>
        {console.log(error)}
        <button className='bg-success' onClick={getData}>Login</button>
        {error.length>0 && <p  className='text-danger'>{error}</p>}
        {message &&<p className='text-success'>successful login </p>}

      </>

  )
}
