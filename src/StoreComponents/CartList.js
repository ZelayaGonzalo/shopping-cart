function CartList(props){
    return (
        <div className="cardFrame">
            <img src={props.img} alt="aaaa"></img>
            <h2>{props.title}</h2>
            <p>"{props.onCart}"</p>
            <p>{props.price}</p>
            <i id={props.title} className="fas fa-plus-circle" onClick={props.addProduct}></i>
        </div>
    )
    }
    export default CartList