import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../utils/authcontext'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from 'react-redux';

export default function Navbar2() {
  //to show userName and userImage on navbar
  const {userName } = useContext(AuthContext)
  const {userImage}=useContext(AuthContext)
  {console.log("userImage:",userImage)}
  const {login}=useContext(AuthContext) 
  //get store
  const {name,quantity,totalQuantity}=useSelector(state=>state.shop)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-success" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login-register">Login-Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product-table">Product-Table</Link>
        </li>
        <li className="nav-item">
          {login &&  <p>{userName}</p>}
        </li>
        <li className="nav-item">
        {userImage && login &&<img src={URL.createObjectURL(userImage)} style={{ width: "40px", height: "40px",borderRadius:"50%" }} />}
        </li>
        <li className='d-flex flex-row'>
        <p>{totalQuantity}</p>
        <ShoppingBagIcon></ShoppingBagIcon>
        </li>
        {console.log({name})}
        {console.log({quantity})}
      </ul>
   
    </div>
  </div>
</nav>
    </>
  )
}
