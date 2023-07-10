import ImageSlider from '../shared/Splider';
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 lg:py-28 grid grid-cols-12 overflow-x-hidden"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3">
        <h3
          className=" font-[400] text-center text-base lg:text-[1.3rem] leading-[20px] lg:leading-[28px] px-7 lg:px-0 text-[#0fbbd1]"
          style={{
            fontFamily: 'plus_jakarta_sansregular',
            letterSpacing: '.4rem',
            lineHeight: '129%',
          }}
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          Onze Projecten
        </h3>
        <h2
          className="text-3xl lg:text-5xl font-[600] text-center mt-4 lg:mt-6 lg:mb-10 text-uppercase px-7 lg:px-0 leading-[38px] lg:leading-[61px] font-changa"
          style={{
            letterSpacing: '2%',
          }}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Bekijk onze palmares
        </h2>
        <ImageSlider />
      </div>
    </section>
  );
};

export default Projects;
