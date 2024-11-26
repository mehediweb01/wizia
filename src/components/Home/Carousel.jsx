import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carouselList = [
  {
    id: 1,
    image: "/quote.png",
    heading:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    position: "Chief Strategy Officer @ Company",
  },
  {
    id: 2,
    image: "/quote.png",
    heading:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Md.Mehedi hasan",
    position: "front end developer @ Company",
  },
  {
    id: 3,
    image: "/quote.png",
    heading:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Shakib ",
    position: "Designer @ Company",
  },
];
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="sm:pt-24 pt-20 sm:px-[120px] px-6 pb-20">
      <Slider {...settings}>
        {carouselList.map((item) => (
          <div
            className="flex flex-col justify-center items-center sm:space-y-11 space-y-7 "
            key={item.id}
          >
            <div className="bg-[#183A40] flex justify-center items-center rounded-full sm:h-[74px] h-[56px] sm:w-[74px] w-[56px] mx-auto">
              <img src={item.image} alt="" />
            </div>
            <div className="text-center">
              <h2 className="font-workSans font-[300] text-2xl sm:text-[32px] sm:leading-[41px] leading-8 -tracking-[2%] text-white ">
                {item.heading}
              </h2>
            </div>
            <div className="text-center">
              <p className="font-workSans sm:text-2xl text-[18px] sm:leading-9 leading-[27px] font-semibold text-primary ">
                {item.name}
              </p>
              <span className="font-workSans sm:text-xl text-base sm:leading-8 leading-6 text-secondary">
                {item.position}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
