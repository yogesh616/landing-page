import React from 'react';

function BuyOne() {
  const cards = [
    {
      id: 1,
      title: "MakeMyTrip Hotel E-Gift Card",
      description: "Buy a MakeMyTrip Hotel Gift Card & get a complimentary...",
      img: "https://images.freekaamaal.com/featured_images/158846_makemytrip-gift-card-thumbnail.png",
    },
    {
      id: 2,
      title: "MakeMyTrip Hotel E-Gift Card",
      description: "Go, Discover this Magical World!",
      img: "https://images-na.ssl-images-amazon.com/images/I/51wDPBpPLHL._SX342_.jpg",
    },
    {
      id: 3,
      title: "MakeMyTrip Hotel E-Gift Card",
      description: "Enjoy the magical beaches with MakeMyTrip Gift Cards!",
      img: "https://store.engageloop.in/cdn/shop/products/57955Snx3u_1200x1200.jpg?v=1620981335",
    }
  ];

  

  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row items-center justify-between py-10'>
        <h1 className='text-4xl font-semibold text-center md:text-left mb-4 md:mb-0'>
          Buy One Get One- Double the Joy
        </h1>
        <button className='py-5 px-10 font-semibold rounded-lg bg-pink-500 text-white'>
          View More
        </button>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cards.map(card => (
            <div key={card.id} className='max-w-sm rounded-lg overflow-hidden shadow-lg'>
              <img src={card.img} alt={card.title} className='w-full h-56 object-cover' />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{card.title}</div>
                <p className='text-gray-700 text-base'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default BuyOne;
