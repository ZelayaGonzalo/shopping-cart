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
    const name = event.target.id
    let newArray = []
    const checkArray = cart.findIndex(info=> (info.name === name))
    if(checkArray>-1){
      let newComp = cart[checkArray]
      if(newComp.onCart>1){
        newComp=cart[checkArray]
        newComp.onCart-=1
       /* setCart(prevArray => {
          console.log(prevArray)
          console.log(checkArray)
          console.log(newComp)
          newArray = prevArray.slice(checkArray,1)
          console.log(newArray)
          //prevArray=prevArray.filter(info => info.name !== newComp.name)
          return prevArray}
        )*/
      }
      else{
        newComp.onCart=0
        setCart(prevArray =>{
          newArray=prevArray.filter(info => info.name !== newComp.name)
          return newArray
        }
        )
      }
    }
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
