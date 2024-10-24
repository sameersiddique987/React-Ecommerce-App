import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1976d2] text-white  py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Links Section */}
          <div>
            <h5 className="text-lg font-bold">About Us</h5>
            <ul className="mt-2">
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Careers</a></li>
              <li><a href="#" className="hover:text-blue-300">Press ≉ Blog</a></li>
              <li><a href="#" className="hover:text-blue-300">Terms ≉ Conditions</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h5 className="text-lg font-bold">Customer Service</h5>
            <ul className="mt-2">
              <li><a href="#" className="hover:text-blue-300">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300">Installments Plan</a></li>
              <li><a href="#" className="hover:text-blue-300">E-Warranty Activation</a></li>
            </ul>
          </div>

          {/* Payment Methods Section */}
          <div>
            <h5 className=" ml-32 text-lg font-bold">Secure Payment Methods</h5>
            <div className="flex flex-col items-center mt-2">
              <img
                width="30%"
                alt="payments"
                src="https://static.priceoye.pk/images/payment_method.svg"
                className="mb-2"
              />
              <img
                width="20%"
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-sm">
            Copyright © 2024 Ecommers.pk
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/social-youtube.svg" alt="YouTube" width={27} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/social-fb.svg" alt="Facebook" width={27} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/social-instagram.svg" alt="Instagram" width={27} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.priceoye.pk/images/tiktok.svg" alt="TikTok" width={27} />
            </a>
          </div>
          <div className="text-xs text-gray-300 mt-2">
            Prepared by Sameer Siddique
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



