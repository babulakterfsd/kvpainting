import Image from 'next/image';
import decoration from '../../../public/assets/images/service-decoration.png';
import insidehome from '../../../public/assets/images/service-insidehome.png';
import outsidehome from '../../../public/assets/images/service-outsidehome.png';
import restoration from '../../../public/assets/images/service-restoration.png';

const Services = () => {
  return (
    <section id="servicessection" className="lg:py-28">
      <h3
        className=" font-[400] text-center text-[1.3rem]"
        style={{
          fontFamily: 'plus_jakarta_sansregular',
          letterSpacing: '.4rem',
          lineHeight: '129%',
        }}
      >
        OUR SERVICES
      </h3>
      <h2
        className="text-6xl font-[400] text-center lg:mt-6 lg:mb-14 text-uppercase"
        style={{
          fontFamily: 'modular14',
          letterSpacing: '2%',
          lineHeight: '61px',
        }}
      >
        Making Your Dream Home a <br /> Colorful Reality
      </h2>
      <div className="flex flex-col lg:flex-row gap-y-3 justify-center lg:mb-14">
        <div className="p-2 mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-12 lg:w-56">
          <Image
            src={outsidehome}
            alt="Outside Home"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-2xl pb-3"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Outside Painting
          </p>
        </div>
        <div className="p-2 mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-12 lg:w-56">
          <Image
            src={insidehome}
            alt="inside Home"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-2xl pb-3"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            In-house Painting
          </p>
        </div>
        <div className="p-2 mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-12 lg:w-56">
          <Image
            src={decoration}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-2xl pb-3"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Decoration
          </p>
        </div>
        <div className="p-2 mx-4 border-2 border-slate-300 flex justify-center items-center flex-col gap-y-12 lg:w-56">
          <Image
            src={restoration}
            alt="decoration"
            width={136}
            height={136}
            className="p-3 block"
          />
          <p
            className=" font-[600] text-2xl pb-3"
            style={{
              fontFamily: 'plus_jakarta_sansregular',
              letterSpacing: '2%',
            }}
          >
            Restoration
          </p>
        </div>
      </div>
      <div className="w-42 text-center">
        <button className="bg-black px-10 py-4  text-white mt-10 font-bold">
          Get A Free Quote
        </button>
      </div>
    </section>
  );
};

export default Services;
