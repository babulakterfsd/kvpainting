import Image from 'next/image';
import mobilebannerunder from '../../../public/assets/images/mobileunderbannerbg.png';
import Styles from '../../styles/banner.module.css';
const Banner = () => {
  return (
    <section id="bannersection" className="overflow-x-hidden">
      <div className={`${Styles.bannerbg} h-[120vh] lg:h-[200vh] xl:h-[150vh]`}>
        <div className="grid grid-cols-12 px-7 lg:px-0">
          <div className=" flex flex-col col-span-12 lg:col-span-6 lg:col-start-3 lg:mt-72 lg:ml-16 sm:text-center lg:text-left">
            <h1
              className="text-[1.9rem] mt-40 lg:mt-0 lg:text-5xl text-white leading-[39px] lg:leading-[62px] font-[500]"
              style={{
                fontFamily: 'druk_wide_webmedium',
                letterSpacing: '.02em',
              }}
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span className={`${Styles.gradientTitle} font-medium`}>
                Beautifying
              </span>{' '}
              <br /> Homes, Inside <br /> and Out!
            </h1>
            <p
              className="font-[500] text-[.9rem] lg-[.7rem] lg:text-[1rem] text-white my-2"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '.02rem',
              }}
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Home painting is an art that breathes life into dull walls.
              Skilled painters transform spaces with brushstrokes, colors, and
              passion. From surface preparation.{' '}
              <span className="lg:hidden">
                {' '}
                to final touch, every step is meticulous.
              </span>
            </p>

            <div className="w-full">
              <button className="bg-[rgba(251,199,2,1)] px-10 py-3 lg:py-4  text-black mt-3 font-bold w-full sm:w-[200px] lg:w-[173px]">
                Get A Quote
              </button>
            </div>

            <div
              className="mt-9 lg:mt-32 flex gap-x-4 lg:gap-x-11 justify-center lg:justify-normal"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <div className="h-32 w-52 p-4 bg-[#353535] border-gray-400 rounded-md flex justify-center flex-col gap-y-3">
                <h2
                  className="text-5xl text-[#FBC702] font-[500]"
                  style={{
                    fontFamily: 'druk_wide_webmedium',
                  }}
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
              <div className="h-32 w-52 p-4 bg-[#353535] border-gray-400 rounded-md flex justify-center flex-col gap-y-3">
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
      <Image
        src={mobilebannerunder}
        alt="mobilebannerunder"
        className="hidden"
      />
    </section>
  );
};

export default Banner;
