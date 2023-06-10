import Styles from '../../styles/banner.module.css';
const Banner = () => {
  return (
    <section id="bannersection" className="">
      <div className={`${Styles.bannerbg} h-[150vh]`}>
        <div className="grid grid-cols-12">
          <div className=" flex flex-col col-span-12 lg:col-span-6 lg:col-start-3 lg:mt-72 lg:ml-16">
            <h1
              className="text-5xl text-white"
              style={{
                fontFamily: 'druk_wide_webmedium',
                letterSpacing: '2%',
                lineHeight: '129%',
              }}
            >
              <span className={`${Styles.gradientTitle} font-medium`}>
                Beautifying
              </span>{' '}
              <br /> Homes, Inside <br /> and Out!
            </h1>
            <p
              className="font-[500] text-[1rem] text-white my-2"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '2%',
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Velit placerat condimentum
              ipsum lectus. Amet eget egestas eget sit purus mauris enim varius
              id. A eget sit ipsum sagittis lacus
            </p>
            <div className="w-42">
              <button className="bg-[rgba(251,199,2,1)] px-10 py-4 rounded-md text-black mt-3 font-bold">
                Get A Quote
              </button>
            </div>
            <div className="lg:mt-32 flex gap-x-11">
              <div className="h-32 w-52 p-4 bg-[#353535] border-gray-400 rounded-md flex justify-center flex-col">
                <h2
                  className="text-5xl text-[#FBC702] font-[500]"
                  style={{ fontFamily: 'druk_wide_webmedium' }}
                >
                  8
                </h2>
                <h4
                  className="text-base font-[500] text-white"
                  style={{
                    fontFamily: 'plus_jakarta_sansregular',
                    letterSpacing: '.02em',
                    lineHeight: '20.92px',
                  }}
                >
                  Years of Experience
                </h4>
              </div>
              <div className="h-32 w-52 p-4 bg-[#353535] border-gray-400 rounded-md flex justify-center flex-col">
                <h2
                  className="text-5xl text-[#FBC702] font-[500]"
                  style={{ fontFamily: 'druk_wide_webmedium' }}
                >
                  140
                </h2>
                <h4
                  className="text-base font-[500] text-white"
                  style={{
                    fontFamily: 'plus_jakarta_sansregular',
                    letterSpacing: '.02em',
                    lineHeight: '20.92px',
                  }}
                >
                  Projects Completed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
