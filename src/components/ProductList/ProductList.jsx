import { fetchProduct } from '../../store/reducers/createAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductList.css'

export const ProductList = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.productReducer)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProduct())
    } else {
      localStorage.setItem('products', JSON.stringify(products))
    }
  }, [])
  
  return (
    <ul className='productList'>
      {products.map(product => 
        <li key={product.id}>
          <ProductCard product={product}/>
        </li>
      )}
    </ul>
  )
}
