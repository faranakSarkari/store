import React, { useState } from 'react'
import Login from '../../components/login'
import Register from '../../components/register'


export default function LoginRegister() {
    const [login,setLogin]=useState(false)
    const [register,setRegister]=useState(false)
  return (
    <>
    {!login &&!register &&
       <>
     <button className='bg-success' onClick={()=>{setLogin(true) ;setRegister(false)}}>Login</button>
     <button className='bg-danger' onClick={()=>{setRegister(true);setLogin(false)}} >Register</button>
       </>
    }

     {console.log(login)}

     {login&&<Login/>}
     {register && <Register/>}
    </>
  )
}
