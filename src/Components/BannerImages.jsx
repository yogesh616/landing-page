import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerImages() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // You can add autoplay if you'd like it to auto-slide
        autoplaySpeed: 3000, // Speed for auto-slide in milliseconds
    };

    const BannerImages = [
        
        "https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg",
        "https://i.ytimg.com/vi/II0cF9hFQ_g/maxresdefault.jpg",
        "https://i.ytimg.com/vi/f64GdOxJjPE/maxresdefault.jpg",
        "https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg",
        "https://static.woohoo.in/media/assets/banner/unipin_voucher_-1440x274.jpg"
    ];

    return (
        <div className='w-full md:mt-8 lg:mt-36 px-4 sm:px-8 mt-96'>
            <Slider {...settings}>
                {BannerImages.map((image, index) => (
                    <div key={index} className='w-full p-4 block text-center border-0'>
                        <img 
                            src={image} 
                            className='rounded-lg w-full object-cover max-h-96 mx-auto' 
                            alt={`banner-${index}`} 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BannerImages;
