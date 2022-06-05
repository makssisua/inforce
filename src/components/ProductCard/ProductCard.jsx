import './ProductCard.css'
import { Modal } from '../../modal/Modal'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { productSlice } from '../../store/reducers/productSlice';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(productSlice.actions.deleteProduct(product.id))
  }
  
  return (
    <>
      <div className="card product" style={{width: '18rem'}}>
        <Link className="link__item" to={`${product.id}`}>
          <img 
            src={product.imageUrl} 
            className="product__img" 
            alt={product.name} 
          />
          <div className="card-body">
            <p className="card-text fw-bold d-flex justify-content-center">{product.name}</p>
          </div>
        </Link>
        <button 
          type="button" 
          className="btn btn-danger"
          data-bs-toggle="modal" 
          data-bs-target="#deleteProduct"
        >Delete</button>
      </div>
      <Modal title='Delete' targetModal='deleteProduct' okButton={handleDelete}>
        <p>Delete product?</p>
      </Modal>
    </>
  )
}