import React from "react"

function Card(props){
return (
    <div className="cardFrame">
        <img src={props.img} alt="aaaa"></img>
        <h2>{props.title}</h2>
        <p>"{props.shortDescription}"</p>
        <p>{props.price}</p>
        <button id={props.title}onClick={props.addProduct}> Add to cart </button>
    </div>
)
}
export default Card