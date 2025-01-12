import React from 'react'

function CurrentTrendsetters() {

    const products = [
        {
          name: "Reliance Jio Mart E-Gift",
          details: "Applicable on payment via UPI",
          offer: "Flat 4% off",
          code: "JM4",
          maxRedeem: "Redeem up to ₹200.00",
          image: "https://m.media-amazon.com/images/I/31NgKdnFmZL.jpg"
        },
        {
          name: "Amazon Pay Gift Card",
          details: "Applicable on all prepaid transactions",
          offer: "Flat 5% cashback",
          code: "AMZ5",
          maxRedeem: "Redeem up to ₹300.00",
          image: "https://images-eu.ssl-images-amazon.com/images/G/31/gc/designs/livepreview/a_generic_grey_in_noto_email_in-main._CB288131155_.png"
        },
        {
          name: "Flipkart E-Gift Voucher",
          details: "Applicable on selected categories",
          offer: "Flat 3% off",
          code: "FLK3",
          maxRedeem: "Redeem up to ₹150.00",
          image: "https://www.trend10.in/wp-content/uploads/2022/12/flipkart-egift-card.jpg"
        },
        {
          name: "Myntra Gift Card",
          details: "Applicable on clothing and accessories",
          offer: "Flat 7% off",
          code: "MYN7",
          maxRedeem: "Redeem up to ₹250.00",
          image: "https://assets.myntassets.com/v1/assets/images/2017/10/10/11507642302132-3864-p96540.jpg"
        },
        {
          name: "Big Bazaar E-Gift",
          details: "Applicable on groceries and home essentials",
          offer: "Flat 6% off",
          code: "BB6",
          maxRedeem: "Redeem up to ₹200.00",
          image: "https://d1ixo36kppfedg.cloudfront.net/faceview/i5b/ge/j3i/b7a/imgs/1583564799684_22_15_combo323-originnm80prcnt.jpg?productId=P-3867437"
        },
        {
          name: "Zomato Gift Card",
          details: "Applicable on online food orders",
          offer: "Flat 10% cashback",
          code: "ZMT10",
          maxRedeem: "Redeem up to ₹100.00",
          image: "https://cdn.merchant-console.yougotagift.com/media/brands/image/9c4ff3a6-1759-4c4d-8872-646e6d45c5f3.png"
        },
        {
          name: "Swiggy E-Gift",
          details: "Applicable on all orders above ₹300",
          offer: "Flat 8% off",
          code: "SWG8",
          maxRedeem: "Redeem up to ₹120.00",
          image: "https://www.bestomart.com/cdn/shop/products/1000103889_grande.jpg?v=1653107200"
        },
        {
          name: "Nykaa Gift Card",
          details: "Applicable on beauty products",
          offer: "Flat 5% off",
          code: "NYK5",
          maxRedeem: "Redeem up to ₹200.00",
          image: "https://cdn.grabon.in/gograbon/giftbycard/images/product/1532676909853/nykaa-gift-card.jpg"
        }
      ];
  return (
    <div className=" bg-gray-100">
    <h1 className="text-4xl font-bold text-center mb-6">
      Current Trendsetters
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
      {products.map((product, index) => (
         <div key={index} className="border rounded-lg shadow-md p-4 max-w-sm ">
            <div className='relative group'>
            <img
           src={product.image}
           alt={product.name}
           className="rounded-md w-full object-cover h-48 md:h-64 lg:h-72 transition-transform duration-300 ease-in-out group-hover:scale-105"
         />
          <p className="text-white bg-pink-500 py-2  text-xs font-semibold rounded-s-lg inline-block absolute top-0 left-1 -translate-x-1.5 px-2">
           {product.offer}
         </p>
            </div>
        
        
         <h3 className="text-lg font-bold mt-2">{product.name}</h3>
         <p className="text-gray-500 text-sm">{product.details}</p>
         <div className="flex items-center justify-between mt-4 gap-1">
           <div className="bg-black text-white text-sm px-3 py-1 rounded-lg">
             Use Code: {product.code}
           </div>
           <div className="text-yellow-500 text-sm font-medium">
              {product.maxRedeem}
           </div>
         </div>
       </div>
      ))}
    </div>

    <div className=' w-full text-center my-4'>
    <button className='py-3 px-5 font-semibold rounded-lg bg-pink-500 text-white'>View More</button>
    </div>
  </div>
  )
}

export default CurrentTrendsetters
