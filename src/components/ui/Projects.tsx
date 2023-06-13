import ImageSlider from '../shared/Splider';
const Projects = () => {
  return (
    <section
      id="projectssection"
      className="py-20 lg:py-28 grid grid-cols-12 overflow-x-hidden"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3">
        <h3
          className=" font-[400] text-center text-base lg:text-[1.3rem] leading-[20px] lg:leading-[28px] px-7 lg:px-0"
          style={{
            fontFamily: 'plus_jakarta_sansregular',
            letterSpacing: '.4rem',
            lineHeight: '129%',
          }}
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          OUR PROJECTS
        </h3>
        <h2
          className="text-4xl lg:text-6xl font-[400] text-center mt-4 lg:mt-6 lg:mb-10 text-uppercase px-7 lg:px-0 leading-[38px] lg:leading-[61px]"
          style={{
            fontFamily: 'modular14',
            letterSpacing: '2%',
          }}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          check our great designs
        </h2>
        <ImageSlider />
      </div>
    </section>
  );
};

export default Projects;
