const Projects = () => {
  return (
    <section id="projectssection" className="lg:py-28 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 ">
        <h3
          className=" font-[400] text-center text-[1.3rem]"
          style={{
            fontFamily: 'plus_jakarta_sansregular',
            letterSpacing: '.4rem',
            lineHeight: '129%',
          }}
        >
          OUR PROJECTS
        </h3>
        <h2
          className="text-6xl font-[400] text-center lg:mt-6 lg:mb-14 text-uppercase"
          style={{
            fontFamily: 'modular14',
            letterSpacing: '2%',
            lineHeight: '61px',
          }}
        >
          check our great designs
        </h2>
      </div>
    </section>
  );
};

export default Projects;
