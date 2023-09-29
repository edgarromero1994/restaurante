import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="invoice-container"> {/* Agrega una clase contenedor */}
      <div className="invoice-header"> {/* Clase para el encabezado */}
        <h2>Mi Factura</h2>
      </div>
      <div className="invoice-summary"> {/* Clase para el resumen */}
        <div>Cantidad del producto: {quantity}</div>
        <div>Total a pagar: Q.{totalPrice}.00</div>
        <button className="item-pagar" onClick={() => console.log(cart)}>Pagar</button>
      </div>
      <div className="invoice-items"> {/* Clase para los elementos del carrito */}
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-name">{item.name}</div>
            <div className="">Cantidad: {item.quantity}</div>
            <div className="item-price">Precio: Q.{item.price}.00</div>
          </div>
        ))}
      </div>
    </div>
  );
};
