import React, { useEffect } from 'react'
import Products from './Products'
import { useDispatch } from 'react-redux'
import { fetchAllProducts } from '../../redux/actions/product'

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch])

  return (
    <div>
      <Products />
    </div>
  )
}

export default Main
