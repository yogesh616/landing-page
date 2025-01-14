import React from 'react';

function BuyOne() {
  const cards = [
    {
      id: 1,
      title: "Taj Hotel",
      description: "Buy a MakeMyTrip Hotel Gift Card & get a complimentary...",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f2c87863147935.5aa799ab2775d.jpg",
    },
    {
      id: 2,
      title: "MakeMyTrip Hotel ",
      description: "Go, Discover this Magical World!",
      img: "https://www.biddingforgood.com/orgs/mid-atlanticcenter/341727893/343815162.336.255.jpg",
    },
    {
      id: 3,
      title: "MakeMyTrip Hotel ",
      description: "Enjoy the magical beaches with MakeMyTrip Gift Cards!",
      img: "https://www.holualoainn.com/wp-content/uploads/2018/12/beach-gift.jpg",
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
                <p className='text-gray-700 text-base opacity-0'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default BuyOne;
