import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleCard from '../component/SingleCard';
import Footer from '../component/Footer';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Swal from "sweetalert2";
function SingleUser() {
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);


  const syncLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("storage")); 
  };

  const addToCart = () => {
    if (!data) return;
  
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = savedCart.find(item => item.id === data.id);
  
    if (existingItem) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This item is already in your cart.",
        icon: "info",
        confirmButtonColor: "#234e94",
        confirmButtonText: "OK",
      });
      return;
    }
  
    setCartItems(prevCart => {
      const updatedCart = [...savedCart, { ...data, quantity: 1 }];
      syncLocalStorage(updatedCart);
      window.dispatchEvent(new Event("cartUpdated"));
  
      Swal.fire({
        title: "Success!",
        text: "Item added to cart successfully.",
        icon: "success",
        confirmButtonColor: "#234e94",
        confirmButtonText: "OK",
      });
  
      return updatedCart;
    });
  };
  
  const increaseQuantity = () => {
    if (!data) return;

    setCartItems(prevCart => {
      const updatedCart = prevCart.map(item =>
        item.id === data.id
          ? { ...item, quantity: Math.min(3, item.quantity + 1) }
          : item
      );

      syncLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  
  const decreaseQuantity = () => {
    setCartItems(prevCart => {
      let updatedCart = prevCart.map(item =>
        item.id === data.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );

      syncLocalStorage(updatedCart);
      return updatedCart;
    });
  };



  const payNow = async () => {
    if (!data) {
      console.error("No product selected!");
      return;
    }
  
    const stripe = await loadStripe("pk_test_51QarspP9DXcr8WfKlzEFIRiy58vELHNKXtMmd2Il0dyfRiG1ftHz7f6Kwjl1ecwLs8evwTntGprfHFTZkXOzfYzq00ujS5MHYl");
  
    try {
      // 🛒 Get Product Data from Cart
      const productToCheckout = {
        id: data.id,
        category: data.category,
        title: data.title,
        price: data.price * (cartItems.find(item => item.id === data.id)?.quantity || 1),
        quantity: cartItems.find(item => item.id === data.id)?.quantity || 1,
      };
  
      // ✅ Send POST Request to Backend
      const response = await axios({
        method: "post",
        url: "https://payment-integration-blond.vercel.app/api/v1/checkout",
        data: { products: [productToCheckout] },
        withCredentials: false, // Change to true only if using authentication
      });
  
      // ✅ Handle Stripe Checkout Redirection
      if (response.data?.id) {
        const result = await stripe.redirectToCheckout({ sessionId: response.data.id });
        if (result?.error) console.error("Stripe Error:", result.error.message);
      } else {
        console.error("Stripe session ID not received!");
      }
    } catch (err) {
      console.error("Payment Error:", err);
    }
  };
  
  
  return (
    <>
      <div className="px-10 flex flex-wrap justify-center gap-3">
        {data ? (
          <SingleCard
            src={data.image}
            category={data.category}
            description={data.description}
            price={data.price * (cartItems.find(item => item.id === data.id)?.quantity || 1)}
            quantity={cartItems.find(item => item.id === data.id)?.quantity || 0}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            addCard={addToCart}
            payNow={payNow}
          />
        ) : (
          <div className='mt-28 pb-20'>
            <div role="status">
              <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SingleUser;


