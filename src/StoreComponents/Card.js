import React from "react"

function Card(props){
return (
    <div className="cardFrame">
        <img src={props.img} alt="aaaa"></img>
        <h2>{props.title}</h2>
        <p>"{props.shortDescription}"</p>
        <p>{props.price}</p>
        <i id={props.title} className="fas fa-minus-circle" onClick={props.removeProduct}></i><i id={props.title} className="fas fa-plus-circle" onClick={props.addProduct}></i>
    </div>
)
}
export default Card