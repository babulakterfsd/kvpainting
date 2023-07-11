const Whatwedo = () => {
  return (
    <section
      id="whatwedosection"
      className="py-12 lg:py-28 grid grid-cols-12 bg-[rgba(240,240,240,1)] mt-20 lg:mt-0 overflow-x-hidden"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 px-7 lg:px-0 ">
        <div className="grid sm:flex justify-center items-center flex-col lg:grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
          <div className="textcontainer">
            <h3
              className=" font-[400] text-base lg:text-[1.3rem] sm:text-center lg:text-left capitalize text-[#0fbbd1]"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '.4rem',
                lineHeight: '129%',
              }}
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              Wat we doen
            </h3>
            <h2
              className="text-3xl lg:text-6xl font-[600] mt-4 mb-4 lg:mb-6 text-uppercase leading-[38px] lg:leading-[61px] sm:text-center lg:text-left font-changa"
              style={{
                letterSpacing: '2%',
              }}
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Met perfectie komt resultaat
            </h2>
            <div className="">
              <p
                className="text-base font-[400]"
                style={{
                  fontFamily: 'plus_jakarta_sansregular',
                  letterSpacing: '2%',
                  lineHeight: '24px',
                }}
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Met een passie voor schilder- en renovatiewerken, transformeren
                we de buiten- en binnenkant van uw huis. We streven naar een
                hoogwaardige afwerking met de beste materialen, om een
                comfortabele en aantrekkelijke ruimte te creëren.
              </p>
              {/* <div
                className="w-full sm:text-center lg:text-left"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <button className="bg-[rgba(251,199,2,1)] px-10 py-4  font-semibold mt-7 w-full sm:w-[200px] lg:w-[166px]">
                  Meer info
                </button>
              </div> */}
            </div>
          </div>
          <div
            className="imagecontainer order-first lg:order-8 mb-8 lg:mb-0"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            {/* <Image src={whatwedoimage} alt="What We Do" /> */}
            <video autoPlay muted>
              <source
                src="/whatewedonew2.mp4"
                type="video/mp4"
                className="h-96"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
