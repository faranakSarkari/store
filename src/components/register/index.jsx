import React, { useEffect, useState,useContext } from "react";
import LoginRegister from "../../Pages/Login-Register";
import AuthContext from "../../utils/authcontext";


export default function Register() {
  const [loginRegister, setLoginRegister] = useState(false);
  const [emailValue,setEmailVal]=useState("")
  const [passwordValue,setPasswordVal]=useState("")
  const {userImage,setUserImage}=useContext(AuthContext)
  const [message,setMessage]=useState(false)
  const [passwordError,setPasswordError]=useState(false)
  const newUser = {
   emailValue,passwordValue,userImage
  }
  //get userImage
  function handleImageChange(event) {
    const file = event.target.files[0];
    setUserImage(file);
  }
  function postData(){
    if(passwordValue.length<4){
         setPasswordError(true)
         return
    }
    fetch("http://localhost:3001/users",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(newUser)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('User registered:', data);
        setMessage(true)
      })
    


  }
 
  return (
    <>
      {!loginRegister && (
        <>
        {console.log(newUser)}
          <input type="email" onChange={(e)=>setEmailVal(e.target.value)}></input>
          <input type="password" onChange={(e)=>setPasswordVal(e.target.value)}></input>
          {passwordError && <p>your password must have at least 5 characters</p>}
          <label htmlFor="img" >Your Image</label>
          <input type="file" id="img"  onChange={handleImageChange}/>
          <button className='bg-danger' onClick={postData} >Register</button>
          <button onClick={() => setLoginRegister(true)}>
          Go to LoginRegister
          </button>
          {message &&<p className='text-success'>successful register </p>}
         
          
        </>
      )}

      {loginRegister && <LoginRegister/>}
    </>
  );
}