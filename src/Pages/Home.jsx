import React, { useState, useEffect } from 'react';
import ImageCarousel from '../component/Carousel';
import MediaCard from '../component/Card';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import { motion } from "framer-motion";

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const singleUser = (item) => {
    navigate(`SingleUser/${item.id}`);
  };

  //  Filter Products Based on Search Term
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ImageCarousel />

      {/*  Search Input */}
      <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Search products..."
          className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Recommended Heading */}
      <div className='ml-9 text-4xl font-extrabold'>
        <i><span className="text-red-600">RECOMMENDED</span> FOR YOU</i>
      </div>

      {/* Product Cards Section */}
      <div className="px-10 flex flex-wrap justify-center gap-3">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <React.Fragment key={item.id}>
              <MediaCard
                image={item.image}
                title={item.category}
                description={item.title}
                price={item.price}
                onClick={() => singleUser(item)}
              />


     

              {index === Math.floor(filteredData.length / 4) && (
                <div className="w-full flex justify-center my-5">
                  <img
                    src="https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-144405.jpg?t=st=1740809793~exp=1740813393~hmac=fd2dec67f23052c08e5479d8509d47294bccf820c4df5093a36356eb13d73f9e&w=1380" // اپنی تصویر کا لنک یہاں لگائیں
                    alt="Ad Banner"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
            </React.Fragment>
          ))
        ) : (
          <div className="mt-28 pb-20 text-center text-gray-600">No products found!</div>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Home;

