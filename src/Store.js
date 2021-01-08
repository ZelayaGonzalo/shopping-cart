import { useState, useEffect } from "react";
import React from "react";
import Card from "./StoreComponents/Card";

function Store(props) {
  const [screenWidth, setScreenWidth] = useState(0);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="storeContainer">
      <nav className="sideBar">
        <li className="item" id="brand">
          <a href="#brand" className="btn">
            Brand
          </a>
          <div className="smenu">
            <a href="https://google.com">Toyota</a>
            <a href="https://google.com">Ford</a>
          </div>
        </li>
        <li className="item" id="price">
          <a href="#price" className="btn">
            Price
          </a>
          <div className="smenu">
            <a href="https://google.com"> {"< $1000"} </a>
            <a href="https://google.com">$1000 ~ $2000</a>
            <a href="https://google.com">{"$2000 <"}</a>
          </div>
        </li>
      </nav>
      <div className="cardContainer" style={{ width: screenWidth }}>
        {props.info.map((info) => (
          <div key={info.name}>
            <Card
              img={info.img}
              title={info.name}
              shortDescription={info.shortDescription}
              price={info.price}
              addProduct={props.addProduct}
              removeProduct={props.removeProduct}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Store;
