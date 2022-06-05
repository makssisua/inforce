import React from 'react'
import '../ProductPage/ProductPage.css'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  const { products } = useSelector(state => state.productReducer)
  const { id } = useParams();
  const { comments } = useSelector(state=> state.commentsReducer)
  
  const currentComments = comments.filter(el => el.productId === Number(id))
  let currentProduct = products.find(el => el.id === Number(id))
  currentProduct = {
    ...currentProduct,
    comments: currentComments
  }
  
  return (
    <div className='product__container'>
      <button type="button" className="btn btn-success m-4">
        <Link className='link' to="/">
           Back
        </Link>
      </button>
      
      <img 
        src={currentProduct.imageUrl}
        className="product__img"
        alt={currentProduct.name} 
      />
      <div className="card-body">
        <p className="card-text fw-bold d-flex justify-content-center">{currentProduct.name}</p>
        <b>Available:</b> {currentProduct.count}
        <br/>
        <b>Size:</b> {currentProduct.size.width}x{currentProduct.size.height}
        <br/>
        <b>Weight:</b> {currentProduct.weight}
      </div>
      
      <div className="card" style={{width: '18rem'}}>
      <div className="card-header">
        Comments
      </div>
      <ul className="list-group list-group-flush">
        {currentProduct.comments.map(comment => 
          <li key={comment.id} className="list-group-item">
            <div>{comment.date}</div>
            {comment.description}
          </li>
        )}
      </ul>
    </div>
    </div>
  )
}