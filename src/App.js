import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import React, { Component ,useState} from 'react'
import Login from './components/login';
import Dashboard from './components/dashboard';
import Shop from './components/shop';
import Cart from './components/cart';

export default function App() {
  const [cart, setCart] = React.useState([]);
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}></Route> 
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/shop" element={<Shop func={setCart} cart={cart}/>}></Route>
            <Route exact path="/cart" element={<Cart cart={cart}/>}></Route>
            <Route exact path="/check" element={<Cart cart={cart}/>}></Route>
          </Routes>
        </Router>
      </div>
    )}
