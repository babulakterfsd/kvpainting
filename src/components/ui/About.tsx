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
          OVER ONS
        </h3>
        <h2
          className={`${Styles.maintitle} text-4xl font-[500] text-center mt-4 lg:mt-6 lg:mb-14 lg:leading-[49px] `}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Transformeer Je Huis met Onze Inspirerende Schilder- en
          Restauratiediensten
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
              Ons verhaal begint met een passie voor schilder- en
              renovatiewerken. We geloven in de kracht van kleur om uw huis te
              transformeren. Of het nu gaat om buitenmuren of binnenmuren, we
              zetten ons in om elk detail nieuw leven in te blazen met
              hoogwaardige afwerking en topkwaliteit materialen. We bouwen
              relaties op met onze klanten, begrijpen hun visie en vertalen deze
              naar een prachtig eindresultaat. Kies voor onze professionele
              schilder- en renovatiediensten en ervaar het verschil.
              <span className="mt-2 block">
                {' '}
                We willen niet enkel voldoen aan uw verwachtingen, we willen ze
                overtreffen.
              </span>
            </p>
            <div className="w-full sm:text-center lg:text-left">
              <button className="bg-[rgba(251,199,2,1)] px-10 py-4  text-black mt-6 lg:mt-10 font-bold w-full sm:w-[250px] capitalize">
                Vraag uw offerte aan
              </button>
            </div>
          </div>
          <div className="order-first lg:order-2 overflow-hidden">
            <Image
              src={AboutPhoto}
              alt="About Photo"
              height={570}
              width={570}
              className="object-cover my-6 lg:my-0 transition-all duration-500 ease-in-out transform hover:scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
