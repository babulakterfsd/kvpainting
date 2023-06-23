import Image from 'next/image';
import AboutPhoto from '../../../public/assets/images/about.png';
import Styles from '../../styles/about.module.css';

const About = () => {
  return (
    <section
      id="aboutsection"
      className="pt-20 pb-6 lg:py-28 grid grid-cols-12 overflow-x-hidden"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 px-7 lg:px-0">
        <h3
          className=" font-[400] text-center text-base lg:text-[1.3rem] text-[#0fbbd1]"
          style={{
            fontFamily: 'plus_jakarta_sansregular',
            letterSpacing: '.4rem',
            lineHeight: '129%',
          }}
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          ABOUT US
        </h3>
        <h2
          className={`${Styles.maintitle} text-4xl font-[500] text-center mt-4 lg:mt-6 lg:mb-14 lg:leading-[49px] `}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Transforming <br className="lg:hidden" /> Homes with <br /> Expert
          Painting and Restoration Services
        </h2>
        {/* about text and photo container */}
        <div
          className="grid sm:flex lg:grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6  justify-center items-center flex-col"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <div className="px-4">
            <p
              className="text-base font-[400] "
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '2%',
                lineHeight: '24px',
              }}
            >
              Home painting is an art that breathes life into dull walls.
              Skilled painters transform spaces with brushstrokes, colors, and
              passion. From surface preparation to final touch, every step is
              meticulous. Colors evoke moods; pastels calm, bold hues energize.
              Each stroke layers paint.
              <span className="mt-2 block">
                {' '}
                Home painting is creativity unleashed, turning houses into
                masterpieces. Invest in joy, comfort, and pride. Let colors
                speak, walls sing, art alive.
              </span>
            </p>
            <div className="w-full sm:text-center lg:text-left">
              <button className="bg-[rgba(251,199,2,1)] px-10 py-4  text-black mt-6 lg:mt-10 font-bold w-full sm:w-[200px] lg:w-[173px]">
                Get A Quote
              </button>
            </div>
          </div>
          <div className="order-first lg:order-2">
            <Image
              src={AboutPhoto}
              alt="About Photo"
              height={416}
              width={570}
              className="object-cover my-6 lg:my-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
