import React from "react";
import storeItems from "../data/products.json";
import { Item } from "./Item";

export const ItemList = () => {
  return ( 
    <>
     <div className="welcome-header">
    <h1>La Parrilla Sabrosa</h1>
    <img className="item-img" src=" https://www.huleymantel.com/uploads/s1/33/49/37/amar-barcelona.jpeg" alt="" />
  </div>

        <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
    
    </>

  );
};
