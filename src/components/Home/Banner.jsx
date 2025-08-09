import Lottie from "lottie-react";
import img1 from "../../assets/BannerImage/slide-1.png";
import img2 from "../../assets/BannerImage/slide-2.png";
import img3 from "../../assets/BannerImage/slide-3.png";
import lottieAnimation from '../../assets/Lottie/coffeeLottie.json';

const Banner = () => {
  return (
    <div className="text-center relative">
      {/* Large devices - Carousel */}
      <div className="hidden lg:block">
        <div className="carousel h-[calc(100vh-82px)] w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img3} className="w-full h-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn bg-[#bfac9c] btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn bg-[#bfac9c] btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full h-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn bg-[#bfac9c] btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn bg-[#bfac9c] btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src={img1} className="w-full h-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn bg-[#bfac9c] btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn bg-[#bfac9c] btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Small devices - Coffee site animated text */}
      <div className="lg:hidden flex flex-col justify-center items-center h-[calc(100vh-82px)] px-4 bg-gradient-to-b from-[#f8f1e7] to-[#e6d3c2]">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <Lottie animationData={lottieAnimation} loop={true} style={{ width: "100%", height: "auto" }} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#513326] animate-bounce mb-3 sm:mb-4 text-center">
          Welcome to Coffee Haven ☕
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#6b4f3a] animate-pulse text-center max-w-sm sm:max-w-md md:max-w-lg">
          Discover the rich aroma, bold flavors, and cozy vibes. 
          From freshly brewed espresso to creamy cappuccinos — your perfect cup awaits.
        </p>
      </div>
    </div>
  );
};

export default Banner;
