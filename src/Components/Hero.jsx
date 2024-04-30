const Hero = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="slide1"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          className="carousel-item relative w-full bg-no-repeat bg-cover"
        >
          <img src="" className="w-full h-[100vh] object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>

            <div>
              <h1 className="text-center text-6xl mb-4 font-extrabold text-[#fff]">
                Discover the Latest Trends in Textiles!
              </h1>
              <h4 className="leading-10 text-3xl w-3/4 mx-auto text-center text-[#ffffffdf]">
                Stay Ahead with Our Textile Trend Insights: Explore the Latest
                Innovations and Styles Setting the Pace in the Dynamic World of
                Fabrics and Fashion.
              </h4>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://themetechmount.com/wordpress/fablio/elementor/wp-content/uploads/sites/13/2021/02/7-min-600x430.jpg)",
          }}
          className="carousel-item relative w-full bg-no-repeat bg-cover "
        >
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>

            <div>
              <h1 className="text-center text-6xl mb-4 font-extrabold text-[#fff]">
                Discover the Latest Trends in Textiles!
              </h1>
              <h4 className="leading-10 text-3xl w-3/4 mx-auto text-center text-[#ffffffdf]">
                Stay Ahead with Our Textile Trend Insights: Explore the Latest
                Innovations and Styles Setting the Pace in the Dynamic World of
                Fabrics and Fashion.
              </h4>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://static.fibre2fashion.com/newsresource/images/254/shutterstock-340020056_266502.jpg)",
          }}
          className="carousel-item relative w-full bg-no-repeat bg-cover"
        >
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h1 className="text-center text-6xl mb-4 font-extrabold text-[#fff]">
                Discover the Latest Trends in Textiles!
              </h1>
              <h4 className="leading-10 text-3xl w-3/4 mx-auto text-center text-[#ffffffdf]">
                Stay Ahead with Our Textile Trend Insights: Explore the Latest
                Innovations and Styles Setting the Pace in the Dynamic World of
                Fabrics and Fashion.
              </h4>
            </div>

            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
