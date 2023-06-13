import Image from 'next/image';
import whatwedoimage from '../../../public/assets/images/whatwedo.png';

const Whatwedo = () => {
  return (
    <section
      id="whatwedosection"
      className="py-12 lg:py-28 grid grid-cols-12 bg-[rgba(240,240,240,1)] mt-20 lg:mt-0"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 px-7 lg:px-0 ">
        <div className="grid sm:flex justify-center items-center flex-col lg:grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
          <div className="textcontainer">
            <h3
              className=" font-[400] text-base lg:text-[1.3rem] sm:text-center lg:text-left"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '.4rem',
                lineHeight: '129%',
              }}
            >
              WHAT WE DO
            </h3>
            <h2
              className="text-4xl lg:text-6xl font-[400] mt-4 mb-4 lg:mb-6 text-uppercase leading-[38px] lg:leading-[61px] sm:text-center lg:text-left"
              style={{
                fontFamily: 'modular14',
                letterSpacing: '2%',
              }}
            >
              We work for Your Home a Colorful Reality
            </h2>
            <div className="">
              <p
                className="text-base font-[400]"
                style={{
                  fontFamily: 'plus_jakarta_sansregular',
                  letterSpacing: '2%',
                  lineHeight: '24px',
                }}
              >
                Home painting is an art that breathes life into dull walls.
                Skilled painters transform spaces with brushstrokes, colors, and
                passion. From surface preparation to final touch, every step is
                meticulous. Colors evoke moods.
                <span className="block mt-0.5 lg:hidden">
                  <br />
                  Home painting is an art that breathes life into dull walls.
                  Skilled painters transform spaces with brushstrokes, colors,
                  and passion. From surface preparation to final touch, every
                  step is meticulous. Colors evoke moods; pastels calm, bold
                  hues energize. Each stroke layers paint.
                </span>
              </p>
              <div className="w-full sm:text-center lg:text-left">
                <button className="bg-black px-10 py-3 lg:py-4  text-white mt-7 w-full sm:w-[200px] lg:w-[166px]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="imagecontainer order-first lg:order-8 mb-8 lg:mb-0">
            <Image src={whatwedoimage} alt="What We Do" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
