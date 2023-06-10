import Image from 'next/image';
import whatwedoimage from '../../../public/assets/images/whatwedo.png';

const Whatwedo = () => {
  return (
    <section
      id="whatwedosection"
      className="lg:py-28 grid grid-cols-12 bg-[rgba(240,240,240,1)]"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
          <div className="textcontainer">
            <h3
              className=" font-[400] text-[1.3rem]"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '.4rem',
                lineHeight: '129%',
              }}
            >
              WHAT WE DO
            </h3>
            <h2
              className="text-6xl font-[400] lg:mt-4 lg:mb-8 text-uppercase"
              style={{
                fontFamily: 'modular14',
                letterSpacing: '2%',
                lineHeight: '61px',
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
                Lorem ipsum dolor sit amet consectetur. Lacus nisl viverra
                semper quam lectus tristique. Eros egestas pellentesque sed
                convallis sed. Lacus pellentesque commodo condimentum libero non
                ultrices quis tortor. Lorem ipsum dolor sit amet .
              </p>
              <div className="w-42">
                <button className="bg-black px-10 py-4  text-white mt-7 font-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="imagecontainer">
            <Image src={whatwedoimage} alt="What We Do" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
