import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { RemoveOne,RemoveItem,RemoveAll } from '../../store/slices/ShopSlice'; 

export default function ProductTable() {

    const {name,quantity,price}=useSelector(state=>state.shop)
    const dispatch=useDispatch()
    const totalPrice = quantity?.map((e, index) => e * price[index]);
    let sum=0
    totalPrice?.forEach(element => {
        sum=sum+element
    });
  return (
    <>
        <table style={{border:"2px solid green"}}>
  <tr  style={{border:"2px solid green"}}>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>price</th>
    <th>Total Price</th>
  </tr>
{console.log(price)}
 
  <td style={{border:"2px solid green"}}>
  {name?.map((e,index)=><tr>{e} </tr>)}
  </td>
  <td  style={{border:"2px solid green"}}>
  {quantity?.map((e,index)=><tr>{e} </tr>)}
  </td>
  <td style={{border:"2px solid green"}}>
  {price?.map((e,index)=><tr>{e} </tr>)}
  </td>
  <td style={{border:"2px solid green"}}>
  {quantity?.map((e,index)=><tr>{e*(price[index])} </tr>)}
  </td>
  <td style={{border:"2px solid green"}}>
  {name?.map((e,index)=><tr><button onClick={()=>dispatch(RemoveOne({name:e,quantity,price}))}>removeOne</button> </tr>)}
  </td>
  <td style={{border:"2px solid green"}}>
  {name?.map((e,index)=><tr><button onClick={()=>dispatch(RemoveItem({name:e,quantity,price}))}>removeItem</button> </tr>)}
  </td>
</table>
<button className='btn btn-danger' onClick={()=>dispatch(RemoveAll())}>removeAll</button>
<p>{sum}</p>
    </>

  )
}
