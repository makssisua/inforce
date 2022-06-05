import { fetchProduct, fetchComments } from '../../store/reducers/createAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard'
import { AddProduct } from '../AddProduct/AddProduct'
import './ProductList.css'

export const ProductList = () => {
  const dispatch = useDispatch()
  const { products, isLoading } = useSelector(state => state.productReducer)
  const { comments } = useSelector(state=> state.commentsReducer)

  useEffect(() => {
    if(products?.length < 1 || products === null) {
      dispatch(fetchProduct());
      dispatch(fetchComments());
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [products, comments])

  console.log(products)
  
  return (
    <>
      <AddProduct />
      {isLoading && 
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      }
        <ul className='productList'>
          {products?.map(product => 
            <li key={product.id}>
              <ProductCard product={product}/>
            </li>
          )}
        </ul>
    </>
  )
}
