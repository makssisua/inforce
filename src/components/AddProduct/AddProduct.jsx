import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../modal/Modal'
import { productSlice } from '../../store/reducers/productSlice';

export const AddProduct = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.productReducer)
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [weight, setWeight] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const  handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      imageUrl: imgSrc,
      name: name,
      count: amount,
      size: {
        width: width,
        height: height
      },
      weight: weight,
      comments: []
    }

    dispatch(productSlice.actions.addProduct(newProduct))
  }
  
  return (
    <>
      <button 
        type="button" 
        className="btn btn-primary"
        data-bs-toggle="modal" 
        data-bs-target="#addProduct"
      >Add product</button>
      <Modal 
        title='Add product' 
        okButton={handleAddProduct}
        targetModal='addProduct'
        >
        <div className='d-flex flex-column justify-content-center'>
          <div className="input-group mb-3">
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default"
            >
              Name
            </span>
            <input 
              value={name}
              type="text"
              placeholder='write name of product'
              className="form-control" 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="input-group mb-3">
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default"
            >
              Amount
            </span>
            <input 
              value={amount}
              type="number"
              placeholder='write amount'
              className="form-control" 
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          
          <div className="input-group mb-3">
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default"
            >
              Img src
            </span>
            <input 
              value={imgSrc}
              type="text"
              placeholder='write image src'
              className="form-control"
              onChange={(e) => setImgSrc(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default"
            >
              Weight
            </span>
            <input 
              value={weight}
              type="text"
              placeholder='write product weight'
              className="form-control"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default"
            >
              Width
            </span>
            <input 
              value={width}
              type="text"
              placeholder='write product width'
              className="form-control"
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default"
            >
              Height
            </span>
            <input
              value={height}
              type="text"
              placeholder='write product height'
              className="form-control"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div> 
      </Modal>
    </>
  )
}
