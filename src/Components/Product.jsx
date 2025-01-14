import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useProduct } from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';

function Product() {
  const { selectedProduct, setSelectedProduct } = useProduct(); // Access context
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedProduct) {
      // Try retrieving the product from localStorage
      const storedProduct = localStorage.getItem('selectedProduct');
      if (storedProduct) {
        setSelectedProduct(JSON.parse(storedProduct)); // Update context
      } else {
        // If no product data is found, navigate back to the home page
        navigate('/');
      }
    } else {
      // Save the selected product to localStorage for persistence
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    }
  }, [selectedProduct, setSelectedProduct, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full px-4 sm:mt-72 sm:px-8 py-10 md:mt-44 lg:mt-36 mt-10">
        {/* Product Details */}
        <div className="bg-[#F9F7FC] p-5 rounded-lg shadow-md transition-transform transform hover:scale-[1.01] duration-500 cursor-pointer">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              {/* Product Info */}
              <div className="flex items-start gap-6">
                <img
                  className="h-48 rounded-lg shadow-sm transition-transform transform hover:scale-105 duration-500"
                  src={selectedProduct.image}
                  alt="Product"
                />
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-[#EB1697] transition-colors duration-500">
                    {selectedProduct.name}
                  </h1>
                  <p className="text-sm text-gray-600 py-2">{selectedProduct.description}</p>
                  <p className="hidden text-xs text-gray-500 mt-2">Flat 4% off</p>
                 
                </div>
              </div>
              {/* Action Button */}
              <div className='flex items-center justify-center pt-16 '>
                <button className="bg-[#EB1697]  text-white py-2.5 sm:px-8 px-24 rounded-md shadow-md  transition-all hover:bg-[#D21484] hover:shadow-lg">
                  <a href={selectedProduct.referral_url} target="_blank" rel="noopener noreferrer">
                    Claim
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='w-full h-[1px] bg-orange-300 mt-16 p-0'></div>
      </main>
    
      <Footer />
    </div>
  );
}

export default Product;
