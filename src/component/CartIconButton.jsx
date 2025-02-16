import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
    background-color: red;
    color: white;
  }
`;

export default function CartIconButton() {
  const [cartCount, setCartCount] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)"); 

  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = storedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <IconButton sx={{ color: isMobile ? "black" : "white" }}> 
      <CartBadge badgeContent={cartCount} overlap="circular">
        <ShoppingCartIcon sx={{ color: "inherit" }} />
      </CartBadge>
    </IconButton>
  );
}
