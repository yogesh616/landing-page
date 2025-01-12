import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-[#291022]'>
      <div className='flex items-center justify-between px-6 sm:px-10 lg:px-20 py-6 sm:py-8'>
        {/* Footer Text */}
        <div className='flex flex-wrap items-center justify-start gap-3 text-white text-sm sm:text-lg'>
          <p>Chat with us Terms of use</p>
          <span>|</span>
          <p>Privacy Policy</p>
          <span>|</span>
          <p>To report a fraud/Unauthorized transaction &nbsp;</p>
          <span>|</span>
          <p>ISO 270001 : 2013 certified</p>
        </div>

        {/* Social Icons */}
        <div className='flex items-center justify-between gap-6 sm:gap-8 mt-4 sm:mt-0'>
          <p className='cursor-pointer w-12 h-12 sm:w-16 sm:h-16 border border-spacing-1 rounded-full flex items-center justify-center ring-2 ring-transparent hover:ring-pink-500 hover:bg-pink-100 transform hover:scale-105 transition-all'>
            <i className="text-lg sm:text-2xl fa-brands fa-facebook text-pink-500"></i>
          </p>
          <p className='cursor-pointer w-12 h-12 sm:w-16 sm:h-16 border border-spacing-1 rounded-full flex items-center justify-center ring-2 ring-transparent hover:ring-pink-500 hover:bg-pink-100 transform hover:scale-105 transition-all'>
            <i className="text-lg sm:text-2xl fa-brands fa-linkedin-in text-pink-500"></i>
          </p>
          <p className='cursor-pointer w-12 h-12 sm:w-16 sm:h-16 border border-spacing-1 rounded-full flex items-center justify-center ring-2 ring-transparent hover:ring-pink-500 hover:bg-pink-100 transform hover:scale-105 transition-all'>
            <i className="text-lg sm:text-2xl fa-brands fa-instagram text-pink-500"></i>
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className='w-full h-[1px] bg-pink-300'></div>

      {/* Copyright Text */}
      <div className='w-full text-center py-4 text-pink-300 text-sm sm:text-lg'>
        <p>Copyright © 2025 Pine Labs Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
