import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuBank from "../BannerImages/AUBank.png";
import DBS_D from "../BannerImages/DBS-D.png";
import DBS_D_Banner from "../BannerImages/DBS_D_Banner.png";
import Lenskart_D from "../BannerImages/Lenskart-D.png";
import Gyftr_Nykaa_D from "../BannerImages/Gyftr_Nykaa_D.png";
import Reward_program_d from "../BannerImages/Reward_program_d.png";
import DBS_D_Banner1 from "../BannerImages/DBS_D_Banner1.png";

function BannerImages() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const BannerImages = [
    AuBank,
    DBS_D,
    DBS_D_Banner,
    Lenskart_D,
    Gyftr_Nykaa_D,
    Reward_program_d,
    DBS_D_Banner1,
  ];

  const imageHeight = "360px"; // Set your desired height here

  return (
    <div className="w-full md:mt-8 lg:mt-36 px-2 sm:px-8 mt-64">
      <Slider {...settings}>
        {BannerImages.map((image, index) => (
          <div key={index} className="w-full sm:p-4 block text-center border-0">
            <img
              src={image}
              className="rounded-lg sm:w-full w-11/12  mx-auto object-cover py-10 sm:object-fill lg:h-[360px] h-52 "
            
              alt={`banner-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerImages;
