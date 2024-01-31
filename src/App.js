
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar2 from './components/Navbar/index2';
import Footer from './components/Footer';
import { Route,Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import LoginRegister from './Pages/Login-Register';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import PageNotFound from './Pages/404';
import { useState } from 'react';
import AuthContext from './utils/authcontext';
import Logout from './Pages/logout';
import ProductTable from './Pages/productTable';


function App() {

  const [userName, setUserName] = useState(null)
  const [userImage,setUserImage]=useState(null)
  const [login,setLogin]=useState(false)
  return (
<AuthContext.Provider value={{userName,setUserName,userImage,setUserImage,login,setLogin}}>

  <Navbar2/>
     <Routes>
     <Route exact path='/' element={<Home/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/login-register' element={!login? <LoginRegister/>: <Navigate to={"/logout"}/>}/>
     <Route path='/logout' element={<Logout/>}/>
     <Route path='/products' element={<Products/>} />
     <Route path='/product-details/:productId' element={<ProductDetail/>}/>
     <Route path='product-table' element={<ProductTable/>}/>
     <Route path='*' element={<PageNotFound />} />
     </Routes>
     <Footer/>
</AuthContext.Provider>

  );
}

export default App;
