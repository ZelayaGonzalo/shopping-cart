import CartList from "./StoreComponents/CartList"

function Cart(props){
    return(
        <div className="cardContainer">
        {props.info.map((info) => (
          <div key={info.name}>
            <CartList
              img={info.img}
              title={info.name}
              onCart={info.onCart}
              price={info.price}
              addProduct={props.addProduct}
            />
          </div>
        ))}
        </div>

    )
}
export default Cart