import React,{useState} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Cart from "./Cart"
import data from "./CarsData"

const Routes = () => {
  const [cart,setCart] =useState([])

  function addProductToCart(event){
    const name=event.target.id
    const newItem=data.filter(info => info.name === name)
    newItem[0].onCart+=1
    console.log(newItem)
    if(!(cart.some(info=>info.name===name))){
      setCart(prevState=> prevState.concat(newItem))
    }
   
    
  }

  function removeProductOfCart(event) {
    const name=event.target.id
    const newArray=[]
    const checkArray=cart.find(info=> (info.name === name))
    if(cart[checkArray].onCart>1){
      newArray=cart[checkArray]
      newArray[0].onCart-=1
    }
    newArray=cart.filter(info=> (info.name === name))
    console.log(newArray)
    setCart( () => newArray )
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li className="links">
            <Link to="/">Home</Link>
          </li>
          <li className="links">
            <Link to="/store"></Link>
          </li>
          <li className="links">
            <Link to="/store">Topics</Link>
          </li>
          <li className="links">
            <Link to="/checkout">Cart</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/store" render={(props)=> <Store {...props} info={data} addProduct={addProductToCart} removeProduct={removeProductOfCart}></Store>}/>
        <Route exact path="/checkout" render={(props)=> <Cart {...props} info={cart} addProduct={addProductToCart} removeProduct={removeProductOfCart}></Cart>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
