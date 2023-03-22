import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function navSliders() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="flex-col shadow-xl items-center bg-slate-800 opacity-50 hover:bg-opacity-20 p-10 m-3 text-center rounded-xl">
          <h3>Thing 2</h3>
        </div>
        <div className="flex-col shadow-xl items-center bg-slate-800 opacity-50 hover:bg-opacity-20 p-10 m-3 text-center rounded-xl">
          <h3 className="text-white">Thing 2</h3>
        </div>
        <div className="flex-col shadow-xl items-center bg-slate-800 opacity-50 hover:bg-opacity-20 p-10 m-3 text-center rounded-xl">
          <h3>Thing 2</h3>
        </div>
        <div className="flex-col shadow-xl items-center bg-slate-800 opacity-50 hover:bg-opacity-20 p-10 m-3 text-center rounded-xl">
          <h3>Thing 2</h3>
        </div>
      </Slider>
    </div>
  );
}
