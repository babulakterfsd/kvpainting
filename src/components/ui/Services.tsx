import Image from 'next/image';
import decorationm from '../../../public/assets/images/service-decoration-m.png';
import decoration from '../../../public/assets/images/service-decoration.png';
import insidehomem from '../../../public/assets/images/service-insidehome-m.png';
import insidehome from '../../../public/assets/images/service-insidehome.png';
import outsidehomem from '../../../public/assets/images/service-outsidehome-m.png';
import outsidehome from '../../../public/assets/images/service-outsidehome.png';
import restorationm from '../../../public/assets/images/service-restoration-m.png';
import restoration from '../../../public/assets/images/service-restoration.png';

const Services = () => {
  return (
    <section id="service" className="lg:py-28 mt-32 lg:mt-0 overflow-x-hidden">
      <h3
        className=" font-[400] text-center text-base lg:text-[1.3rem] px-7 lg:px-0 capitalize text-[#0fbbd1]"
        style={{
          fontFamily: 'plus_jakarta_sansregular',
          letterSpacing: '.4rem',
          lineHeight: '129%',
        }}
        data-aos="fade-down"
        data-aos-duration="2500"
      >
        Onze diensten
      </h3>
      <h2
        className="text-3xl lg:text-5xl font-semibold text-center mt-4 lg:mt-6 mb-8 lg:mb-14 text-uppercase leading-[38px] lg:leading-[56px] px-7 lg:px-0 font-changa"
        style={{
          letterSpacing: '2%',
        }}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Laat Uw Ideale Woning <br /> Kleurrijk Worden
      </h2>
      <div
        className="grid gap-2 lg:gap-0 grid-cols-2 lg:grid-cols-4 lg:flex flex-wrap  gap-y-5 lg:gap-y-0 justify-center lg:mb-14 px-4 lg:px-0"
        data-aos="fade-down"
        data-aos-duration="2500"
      >
        <div className="px-6 py-2 lg:p-2 lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={outsidehome}
            alt="Outside Home"
            width={136}
            height={136}
            className="p-3 hidden lg:block"
          />
          <Image
            src={outsidehomem}
            alt="Outside Home"
            width={136}
            height={136}
            className="p-3 block lg:hidden"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3 text-[#d9af0f] lg:text-black"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Buitenwerken
          </p>
        </div>
        <div className="px-6 py-2 lg:p-2  lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={insidehome}
            alt="inside Home"
            width={136}
            height={136}
            className="p-3 hidden lg:block"
          />
          <Image
            src={insidehomem}
            alt="inside Home"
            width={136}
            height={136}
            className="p-3 block lg:hidden"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3 text-[#d9af0f] lg:text-black"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Binnenwerken
          </p>
        </div>
        <div className="px-6 py-2 lg:p-2  lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={decoration}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 hidden lg:block"
          />
          <Image
            src={decorationm}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 block lg:hidden"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3 px-8 text-[#d9af0f] lg:text-black"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Decoratie
          </p>
        </div>
        <div className="px-6 py-2 lg:p-2  lg:mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-4 lg:gap-y-12 lg:w-56">
          <Image
            src={restoration}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 hidden lg:block"
          />
          <Image
            src={restorationm}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 block lg:hidden"
          />
          <p
            className=" font-[600] text-base text-center lg:text-2xl pb-3 px-8 text-[#d9af0f] lg:text-black"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Restoratie
          </p>
        </div>
      </div>
      <div
        className="w-full text-center"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-offset="1"
      >
        <button className="bg-[rgba(251,199,2,1)]  lg:px-10 py-4 w-[90%] sm:w-[200px] lg:w-[260px] font-semibold mt-10">
          Vraag Uw Offerte Aan
        </button>
      </div>
    </section>
  );
};

export default Services;
