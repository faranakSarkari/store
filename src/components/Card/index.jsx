import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({title,price,des,image,id}) {
  return (
   <>
   <div className="card mt-3 mx-2"  style={{width: 300 + 'px', }}>
   <img src={image} className="card-img-top" alt={title} style={{height: 300 + 'px', }}/>
   <div className="card-body d-flex flex-column justify-content-between">
   <h5 className="card-title" title={title}>{title.slice(0,25)}{title.length>25 && "..."}</h5>
   <p className="card-text">{des.slice(0,30)}...</p>
   <Link to={`/product-details/${id}`} className="btn btn-primary" style={{width: "100%" }}>more details</Link>
  </div>
</div>
   </>
  )
}
