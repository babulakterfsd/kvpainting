import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import scrollToElement from 'scroll-to-element';
import mobilebannerunder from '../../../public/assets/images/mobileunderbannerbg.png';
import Styles from '../../styles/banner.module.css';

const Banner = () => {
  const scrollTo = (selector: any) => {
    scrollToElement(selector, { offset: 45, ease: 'linear', duration: 500 });
  };

  return (
    <section id="home" className="overflow-x-hidden">
      <div className={`${Styles.bannerbg}`}>
        <div className="grid grid-cols-12 pr-7 sm:px-7 lg:px-0 sm:pb-20">
          <div
            className=" flex flex-col col-span-12 sm:col-span-7 lg:col-span-7 xl:col-span-6 lg:col-start-1 lg:ml-12 sm:text-center lg:text-left sm:pb-5 md:pb-12 glass mt-28 md:mt-36 lg:mt-64 py-6 pl-6 pr-2 lg:pt-10 lg:pb-6 lg:pl-6"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h1
              className="text-[28px] md:text-[1.9rem] h-[90px] sm:h-[150px] lg:h-auto lg:text-[40px] text-white lg:leading-[36px]  text-center leading-[28px]  font-changa tracking-[1.4px] lg:translate-[2.8px] lg:text-left lg:font-[600] lg:mb-3 lg:whitespace-nowrap font-black"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span
                className={`text-white capitalize text-center lg:text-left`}
              >
                Wij
                <span
                  className={`${Styles.gradientTitle} ml-2 xl:ml-3 text-center lg:text-left`}
                  style={{
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
              className="font-[500] text-[1rem] lg-text-[.7rem] lg:text-[1rem] text-white lg:pb-4 text-center lg:text-left"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '.02rem',
                lineHeight: '18px',
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
              <button
                className="bg-[rgba(251,199,2,1)] lg:px-6 py-4  text-black mt-3 lg:mt-1 font-semibold w-full sm:w-[220px] capitalize"
                onClick={() => {
                  scrollTo('#contactsection');
                }}
              >
                Vraag uw offerte aan
              </button>
            </div>
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
