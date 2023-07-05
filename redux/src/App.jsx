import React from 'react'
import Header from './containers/Header'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import ProductListing from './containers/ProductListing'
import ProductDetail from "./containers/ProductDetail"
import "./App.css"

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'  element={<ProductListing/>}/>
      <Route path='/product/:productId'  element={<ProductDetail/>}/>
     <Route>404 NOT FOUND</Route>

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
