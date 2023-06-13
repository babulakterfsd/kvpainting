import Image from 'next/image';
import decoration from '../../../public/assets/images/service-decoration.png';
import insidehome from '../../../public/assets/images/service-insidehome.png';
import outsidehome from '../../../public/assets/images/service-outsidehome.png';
import restoration from '../../../public/assets/images/service-restoration.png';

const Services = () => {
  return (
    <section id="servicessection" className="lg:py-28 mt-32 lg:mt-0 ">
      <h3
        className=" font-[400] text-center text-base lg:text-[1.3rem] px-7 lg:px-0"
        style={{
          fontFamily: 'plus_jakarta_sansregular',
          letterSpacing: '.4rem',
          lineHeight: '129%',
        }}
      >
        OUR SERVICES
      </h3>
      <h2
        className="text-4xl lg:text-6xl font-[400] text-center mt-4 lg:mt-6 mb-8 lg:mb-14 text-uppercase leading-[38px] lg:leading-[61px] px-7 lg:px-0"
        style={{
          fontFamily: 'modular14',
          letterSpacing: '2%',
        }}
      >
        Making Your Dream Home a <br className="hidden lg:block" /> Colorful
        Reality
      </h2>
      <div className="grid gap-2 lg:gap-0 grid-cols-2 lg:grid-cols-4 lg:flex flex-wrap  gap-y-5 lg:gap-y-0 justify-center lg:mb-14 px-4 lg:px-0">
        <div className="px-6 py-2 lg:p-2 lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={outsidehome}
            alt="Outside Home"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Outside Painting
          </p>
        </div>
        <div className="px-6 py-2 lg:p-2  lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={insidehome}
            alt="inside Home"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Inside Painting
          </p>
        </div>
        <div className="px-6 py-2 lg:p-2  lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={decoration}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3 px-8"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Decoration
          </p>
        </div>
        <div className="px-6 py-2 lg:p-2  lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={restoration}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3 px-8"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Restoration
          </p>
        </div>
      </div>
      <div className="w-full text-center ">
        <button className="bg-black lg:px-10 py-3 lg:py-4 w-[90%] sm:w-[200px] lg:w-[260px]  text-white mt-10">
          Get A Free Quote
        </button>
      </div>
    </section>
  );
};

export default Services;
