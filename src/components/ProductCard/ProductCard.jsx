import './ProductCard.css'
import { Modal } from '../../modal/Modal'
import { useDispatch } from 'react-redux';
import { productSlice } from '../../store/reducers/productSlice';

export const ProductCard = ({product}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(productSlice.actions.deleteContact(product.id))
  }
  return (
    <>
      <div className="card product" style={{width: '18rem'}}>
        <img src={product.imageUrl} className="product__img" alt={product.name} />
        <div className="card-body">
          <p className="card-text fw-bold d-flex justify-content-center">{product.name}</p>
        </div>
        <button 
          type="button" 
          className="btn btn-danger"
          data-bs-toggle="modal" 
          data-bs-target="#exampleModal"
        >Delete</button>
      </div>
      <Modal title='Delete' okButton={handleDelete}>
        <p>Delete product?</p>
      </Modal>
    </>
  )
}