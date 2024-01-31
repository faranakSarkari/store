import React,{useContext,useState} from 'react'
import AuthContext from '../../utils/authcontext'

export default function Logout() {
    const { userName } = useContext(AuthContext)
    const {setLogin}=useContext(AuthContext)
    const [message,setMessage]=useState(false)
    function deleteUser(){
        fetch(`http://localhost:3001/users/emailValue=${userName}`,{
            method: "DELETE",
        })
      .then(res=>res.json())  
      .then((data) => {
        console.log("User deleted:", data);
        setLogin(false)
        setMessage(true)
      })
    }
  return (
    <>
    <button className='btn btn-warning' onClick={deleteUser}>logout</button>
    {message &&<p className='text-success'>successful logout </p>}
    </>

  )
}
