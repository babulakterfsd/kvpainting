import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import mobilebannerunder from '../../../public/assets/images/mobileunderbannerbg.png';
import Styles from '../../styles/banner.module.css';
const Banner = () => {
  return (
    <section id="bannersection" className="overflow-x-hidden">
      <div className={`${Styles.bannerbg} -mt-48 sm:mt-0`}>
        <div className="grid grid-cols-12 px-7 lg:px-0 pb-8 sm:pb-20">
          <div className=" flex flex-col col-span-12 lg:col-span-8 lg:col-start-3 lg:ml-16 sm:text-center lg:text-left">
            {/* <h1
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
              <br /> Homes, Inside <br /> and Out
            </h1> */}
            <h1
              className="text-[1.5rem] mt-80 lg:text-5xl text-white leading-[39px] lg:leading-[62px] font-[500] h-[120px]"
              style={{
                fontFamily: 'druk_wide_webmedium',
                letterSpacing: '.02em',
              }}
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span
                className={`${Styles.gradientTitle} font-medium capitalize`}
              >
                Wij{' '}
                <span className="text-white ml-0.5">
                  <Typewriter
                    words={[
                      'Vertalen Visies',
                      'Transformeren Ruimtes',
                      'Creëren Thuisgevoel',
                      'Streven Naar Comfort',
                      'Perfectioneren Plafonds',
                      'Transformeren Deuren',
                      'Verjongen Ramen',
                      'Renoveren Trappen',
                      'Kiezen Kwaliteit',
                      'Garanderen Resultaten',
                      'Zijn Gepassioneerd',
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </span>{' '}
            </h1>
            <p
              className="font-[500] text-[1rem] lg-[.7rem] lg:text-[1rem] text-white my-1 lg:mt-3"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '.02rem',
              }}
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Laat uw muren het verhaal vertellen. <br /> Wij schilderen met
              passie en precisie.
            </p>

            <div
              className="w-full"
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-offset="1"
            >
              <button className="bg-[rgba(251,199,2,1)] lg:px-6 py-3 lg:py-4  text-black mt-3 lg:mt-1 font-bold w-full sm:w-[200px]">
                Get A Quote
              </button>
            </div>

            {/* <div
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
            </div> */}
          </div>
        </div>
      </div>
      <Image
        src={mobilebannerunder}
        alt="mobilebannerunder"
        className="sm:hidden w-full -mt-48 object-fill"
      />
    </section>
  );
};

export default Banner;
