import React,{useEffect,useState} from "react"

function CartList(props){
    const[currentCart,setCurrentcart]=useState(props.onCart)
    useEffect(() => console.log("changed"))
    function updateCurrentCart(event){
        props.addProduct(event)
        setCurrentcart(prev=>prev+1)
    }
    function reduceOne(event){
        props.removeProduct(event)
        setCurrentcart(prev => prev - 1)
    }
    function getSubtotal(quantity,price){
        return quantity*price
    }
    return (
        <div className="cardFrame">
            <img src={props.img} alt="aaaa"></img>
            <h2>{props.title}</h2>
            <p>"{currentCart}"</p>
            <p>Subtotal: ${getSubtotal(props.price,currentCart)}</p>
            <button id={props.title} onClick={updateCurrentCart}>Add one more</button>
            <button id={props.title} onClick={reduceOne}>Take one</button>
        </div>
    )
    }
    export default CartList