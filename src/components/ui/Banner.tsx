import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import mobilebannerunder from '../../../public/assets/images/mobileunderbannerbg.png';
import Styles from '../../styles/banner.module.css';
const Banner = () => {
  return (
    <section id="home" className="overflow-x-hidden">
      <div className={`${Styles.bannerbg}`}>
        <div className="grid grid-cols-12 pr-7 sm:px-7 lg:px-0 sm:pb-20">
          <div
            className=" flex flex-col col-span-12 sm:col-span-7 lg:col-span-7 xl:col-span-6 lg:col-start-1 lg:ml-12 sm:text-center lg:text-left sm:pb-2 md:pb-12 glass mt-40 md:mt-36 lg:mt-64 py-6 pl-6 pr-2 lg:pt-10 lg:pb-6 lg:pl-10 "
            data-aos="fade-down"
            data-aos-duration="1500"
          >
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
              className="text-[1.7rem] md:text-[1.9rem]  lg:text-[56px] text-white leading-[32px] lg:leading-[120%] font-semibold h-[120px] sm:h-[150px]  text-center sm:text-left"
              style={{
                fontFamily: 'Changa',
                letterSpacing: '2.8px',
              }}
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span className={`text-white font-semibold capitalize`}>
                Wij
                <span
                  className={`${Styles.gradientTitle} ml-0.5 `}
                  style={{
                    fontFamily: 'Changa',
                    letterSpacing: '2.8px',
                  }}
                >
                  <Typewriter
                    words={[
                      'Vertalen Visies',
                      'Transformeren Ruimtes',
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
              data-aos-offset="1"
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
              <button className="bg-[rgba(251,199,2,1)] lg:px-6 py-4  text-black mt-3 lg:mt-1 font-semibold w-full sm:w-[220px] capitalize">
                Vraag uw offerte aan
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
        className="hidden w-full -mt-48 object-fill"
      />
    </section>
  );
};

export default Banner;
