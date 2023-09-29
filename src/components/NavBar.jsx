import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <>
    <nav className="item-nav">
      <Link to={"/"} style={navStyles}>
        <h2 className="inicio">Inicio</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            Detalle:
            <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
    <div className="container"> {/* Contenedor principal */}
      {/* El contenido de tu página */}
      {/* Agrega aquí el contenido de tu página */}
    </div>
  </>
  );
};
