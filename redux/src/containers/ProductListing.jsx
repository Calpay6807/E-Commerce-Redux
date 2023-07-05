import React, {useEffect} from 'react'
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import "../App.css"
import ProductComponent from './ProductComponent'
import { setProducts } from './redux/actions/productAction'

const ProductListing = () => {
    const products = useSelector((state) => state.allProduct.products)
    const dispatch = useDispatch();

    useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log(err))

    },[])
   
    
  return (
    <div className='producter'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
