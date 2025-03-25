import Banner_Image from '../assets/Banner_image.jpg';

const Banner = () => {
  return (
    <div id="home" className="relative bg-purple-100 py-30 px-2 md:px-20 flex flex-col md:flex-row justify-center items-center gap-y-12 md:gap-x-20">
      {/* Left Section */}
      <div className="max-w-lg text-center md:text-left">
        <p className="text-red-600 font-semibold text-sm md:text-base">
          Best Collection For You....
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
          New Trendy Collection <br /> Trends in 2025
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Discover the latest collections. From modern designs to timeless classics collections — elevate your style with comfort.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-400 text-white rounded-lg hover:bg-red-600 transition">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative mt-8 md:mt-0 md:ml-20">
        {/* Chair Image with Circle Clipping */}
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
            <img
              src={Banner_Image}
              alt="Chair"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Discount Badge */}
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs md:text-sm font-bold px-3 py-1 md:px-4 md:py-2 rounded-full z-10">
            50% off
          </div>
        </div>
      </div>

      {/* Background Circle */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full opacity-50 z-[-1]"></div>
    </div>
  );
};

export default Banner;
