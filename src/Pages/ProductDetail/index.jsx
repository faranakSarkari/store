import React, { useState,useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'
//for using store
import { useSelector,useDispatch } from 'react-redux';
import { order } from '../../store/slices/ShopSlice';
export default function ProductDetail() {
  const {productId}=useParams()
  const [data,setData]=useState("")
  const navigate=useNavigate()
  const [error, setError] = useState(false);

  //using useSelectore to get states in store
  const {name,quantity,price}=useSelector(state=>state.shop)
  const dispatch=useDispatch()
  //get value of input
  const inpEl=useRef()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then(data=>setData(data))
    // .catch(err=> navigate("/pagenotfound"))
    // .catch(err=> <Navigate to={"/"}/>)
    .catch((err) => setError(true))
  }, []);
  if (error) {
    return <Navigate to="/" />;
  }
  return (
    <div className='d-flex flex-row align-items-center justify-content-center'>
      <div style={{width:"500px",}}>
      <Card sx={{ maxWidth: 375 }} className='mx-auto' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         price: {data.price}
        </Button>
      </CardActions>
      <Link to={`/products`} className="btn btn-primary" style={{width: "100%" }}>Products page</Link>
    </Card>
      </div>
     <div>
    <label>order </label>
    <input type='number' ref={inpEl}></input>
    <button onClick={()=>dispatch(order({name:data.title , num:+inpEl.current.value,price: data.price}))} >order</button>
    <p>name:{name}</p>
     </div>
    </div>
  )
}
