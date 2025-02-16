import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Cancel() {
    const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Payment Cancelled!",
      text: "Your payment was not completed.",
      icon: "warning",
      confirmButtonColor: "#d33",
      confirmButtonText: "Try Again",
    }).then(() => {
      navigate("/"); 
    });
  }, []);
  return (
    <div></div>
  )
}

export default Cancel