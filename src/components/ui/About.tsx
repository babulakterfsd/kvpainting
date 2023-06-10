import Image from 'next/image';
import AboutPhoto from '../../../public/assets/images/about.png';

const About = () => {
  return (
    <section id="aboutsection" className="lg:py-28 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 ">
        <h3
          className=" font-[400] text-center text-[1.3rem] text-[#0fbbd1]"
          style={{
            fontFamily: 'plus_jakarta_sansregular',
            letterSpacing: '.4rem',
          }}
        >
          ABOUT US
        </h3>
        <h2
          className="text-4xl font-[500] text-center lg:mt-4 lg:mb-14"
          style={{
            fontFamily: 'druk_wide_webmedium',
            letterSpacing: '2%',
            lineHeight: '49px',
          }}
        >
          Transforming Homes with <br /> Expert Painting and Restoration
          Services
        </h2>
        {/* about text and photo container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
          <div className="px-4">
            <p
              className="text-base font-[400]"
              style={{
                fontFamily: 'plus_jakarta_sansregular',
                letterSpacing: '2%',
                lineHeight: '24px',
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Lacus nisl viverra semper
              quam lectus tristique. Eros egestas pellentesque sed convallis
              sed. Lacus pellentesque commodo condimentum libero non ultrices
              quis tortor. Lorem ipsum dolor sit amet consectetur. Lacus nisl
              viverra semper quam lectus tristique.
              <span className="mt-2 block">
                {' '}
                Eros egestas pellentesque sed convallis sed. Lacus pellentesque
                commodo condimentum libero viverra.commodo condimentum libero
                viverra.
              </span>
            </p>
            <div className="w-42">
              <button className="bg-[rgba(251,199,2,1)] px-10 py-4  text-black mt-10 font-bold">
                Get A Quote
              </button>
            </div>
          </div>
          <div>
            <Image
              src={AboutPhoto}
              alt="About Photo"
              height={416}
              width={570}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
