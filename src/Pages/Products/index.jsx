import React, { useEffect, useRef, useState } from 'react'
import Card from '../../components/Card';
import "./style.css"

export default function Products() {
  const [data,setData]=useState()
  const [loading,setLoading]=useState(true)
  const loadingEl=useRef()
  useEffect(() => {
     fetch("https://fakestoreapi.com/products")
     .then(res=>res.json())
     .then(data=>{ 
      setData(data)
      loadingEl.current.classList.add("lodingOpacity")
      setTimeout(() => {
      setLoading(false) 
      },1000);
    })
  }, []);
  const items=data?.map((e,index)=><Card 
  id={e.id}
  title={e.title} 
  price={e.price} 
  des={e.description}
  image={e.image}
  key={index}
   />)
  return (
    <>
    {loading? <p className='loading ' ref={loadingEl}>loading</p>:
    <div className='d-flex justify-content-center flex-wrap'>
    {items}
    </div>
    }
    {/* <p className='loading'  ref={loading}>loading</p>
    <div className='d-flex justify-content-center flex-wrap'>
    {items}
    </div> */}
    </>
  )
}
