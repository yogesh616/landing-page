import React from 'react'

function GiftText() {
  return (
    <div >
      <div className="bg-[url('https://cdn.decoist.com/wp-content/uploads/2017/12/Create-your-own-gift-box-this-Holiday-Season.jpg')] bg-cover bg-center h-3/6 w-full">
       <div className='flex flex-col items-end justify-end w-full gap-5 pe-14 py-8'>
        <div className='bg-white text-lg font-semibold w-1/2 flex flex-col items-center justify-between px-2 py-1 pb-2 rounded-sm'>
           <div className='flex  items-center justify-between w-full'>
           <p>BuyGifts Online</p>
            
            <p className='bg-pink-500 px-1 rounded-full'><i className="fa-solid fa-chevron-up text-white"></i></p>
           </div>
           <div className='h-[1px] w-full bg-pink-100 my-3'></div>
           <div className='w-full px-2'>
            Gift is more than just the act of giving or receiving something. A gift carries with it a warm sentiment and best wishes from the gift giver to the recipient.
            Hence, the demand for personalized gifts has increased with time and so have the gifting ideas and options.
            People these days are always looking for unique
            gift ideas to surprise their loved ones and make them feel special.
           </div>
        </div>
        <div className='bg-white text-lg font-semibold w-1/2 flex items-center justify-between px-2 py-1 pb-2 rounded-sm'>
            <p>Finding the Perfect Gift</p>
            <p className='bg-pink-500 px-1 rounded-full'><i className="fa-solid fa-chevron-down text-white"></i></p>
        </div>
        <div className='bg-white text-lg font-semibold w-1/2 flex items-center justify-between px-2 py-1 pb-2 rounded-sm'>
            <p>Embrace the New Gifting</p>
            <p className='bg-pink-500 px-1 rounded-full'><i className="fa-solid fa-chevron-down text-white"></i></p>
        </div>
        <div className='bg-white text-lg font-semibold w-1/2 flex items-center justify-between px-2 py-1 pb-2 rounded-sm'>
            <p>The Best Gifts for Fesstivals & Occasions</p>
            <p className='bg-pink-500 px-1 rounded-full'><i className="fa-solid fa-chevron-down text-white"></i></p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default GiftText
