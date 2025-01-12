import React, { useState, useEffect } from 'react';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full fixed top-0 bg-[#19141a] z-50'>
      {/* Navbar */}
      <header className='text-white p-4'>
        <div className='flex items-center justify-between flex-wrap'>
          {/* Logo */}
          <div className='text-2xl font-bold text-center'>
            <span>Republic Guru</span>
          </div>

          {/* Search Bar */}
          <div className="w-full sm:w-1/5"> {/* Adjust width for small screens */}
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by"
                required
              />
              <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          {/* Buttons (Google Play, App Store, Cart, Sign-in) */}
          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <button className='flex items-center gap-2 bg-white  px-2 py-[6px] rounded-lg'>
             
            <img width="24" height="24" src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="google-play-store-new"/>
              <div className='hidden sm:inline  lg:flex flex-col text-zinc-900'>
                <span className=' text-[7px]'>GET IT ON</span>
              <span className='text-xs font-semibold'>Google Play</span>
              </div>
              
            </button>
            <button className='flex items-center gap-2 bg-white  px-2 py-[6px] rounded-lg'>
             
            <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/>
               <div className='hidden sm:inline  lg:flex flex-col text-zinc-900'>
                 <span className=' text-[7px]'>DOWNLOAD ON THE</span>
               <span className='text-xs font-semibold'>App Store</span>
               </div>
               
             </button>
           
            <div className='relative'>
              <button className='flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full'>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <span className='absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                3
              </span>
            </div>
            <button className='bg-pink-500 text-white px-6 py-2 rounded-lg'>
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Below Navbar (Brand Cards, Categories, etc.) */}
      <div className='flex flex-wrap items-center justify-center gap-6 sm:gap-16 bg-[#19141a] text-white p-4 text-xl'>
        {/* Brand Cards */}
        <div className='flex gap-8 flex-wrap'>
          <div className='text-white px-4 py-2 rounded-lg  sm:mb-0 cursor-pointer'>Brand Cards</div>
        </div>

        {/* Categories with Dropdown */}
        <div className='relative dropdown'>
          <button
            className='bg-transparent text-white px-6 py-2 rounded-md'
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            Categories
          </button>
          {dropdownVisible && (
            <div className='absolute bg-white text-black shadow-md mt-1 rounded-md w-40'>
              <ul className='space-y-2 p-2'>
                <li className='px-1 hover:text-slate-700 cursor-pointer transition-all duration-300 text-slate-300'>Category 1</li>
                <hr />
                <li className='px-1 hover:text-slate-700 cursor-pointer transition-all duration-300 text-slate-300'>Category 2</li>
                <hr />
                <li className='px-1 hover:text-slate-700 cursor-pointer transition-all duration-300 text-slate-300'>Category 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* Coins, Offers, Buy One Get One, Redeem */}
        <div className='flex gap-6'>
          <span className='text-white cursor-pointer'>Coins</span>
          <span className='text-white cursor-pointer'>Offers</span>
          <span className='text-white cursor-pointer'>Buy One <span className='hidden sm:inline'> Get One</span></span>
          <span className='text-white cursor-pointer'>Redeem</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
