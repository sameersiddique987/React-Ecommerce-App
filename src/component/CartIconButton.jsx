// import React, { useEffect, useState } from "react";
// import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import Badge, { badgeClasses } from "@mui/material/Badge";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

// const CartBadge = styled(Badge)`
//   & .${badgeClasses.badge} {
//     top: -12px;
//     right: -6px;
//     background-color: red;  
//     color: white;           
//   }
// `;

// export default function CartIconButton() {
//   const [cartCount, setCartCount] = useState(0);

  
//   const updateCartCount = () => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const totalQuantity = storedCart.reduce((sum, item) => sum + item.quantity, 0);
//     setCartCount(totalQuantity);
//   };

  
//   useEffect(() => {
//     updateCartCount(); 

//     const handleStorageChange = () => {
//       updateCartCount();
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

  
//   useEffect(() => {
//     const interval = setInterval(updateCartCount, 500); 
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <IconButton>
//       <CartBadge badgeContent={cartCount} overlap="circular">
//         <ShoppingCartIcon fontSize="small" sx={{ color: "white" }} />
//       </CartBadge>
//     </IconButton>
//   );
// }

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

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

  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = storedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  };

  useEffect(() => {
    updateCartCount();

    // ✅ Cart Updated Event کو سننے کے لیے Event Listener ایڈ کریں
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <IconButton>
      <CartBadge badgeContent={cartCount} overlap="circular">
        <ShoppingCartIcon fontSize="small" sx={{ color: "white" }} />
      </CartBadge>
    </IconButton>
  );
}
