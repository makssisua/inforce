import { fetchProduct } from '../../store/reducers/createAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductList.css'

export const ProductList = () => {
  const dispatch = useDispatch()
  const { products, isLoading } = useSelector(state => state.productReducer)

  useEffect(() => {
    if(products?.length < 1 || products === null) {
      dispatch(fetchProduct())
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])
  
  return (
    <>
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
