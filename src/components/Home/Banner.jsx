import img1 from "../../assets/BannerImage/slide-1.png";
import img2 from "../../assets/BannerImage/slide-2.png";
import img3 from "../../assets/BannerImage/slide-3.png";



const Banner = () => {
  return (
    <div className="text-center relative">
      <div className="carousel h-[calc(100vh-82px)] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center  justify-center pointer-events-none">

          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
