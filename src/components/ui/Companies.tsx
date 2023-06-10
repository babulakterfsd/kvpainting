import Image from 'next/image';
import ilat from '../../../public/assets/images/company-ilat.png';
import pdotcom from '../../../public/assets/images/company-publicdotcom.png';
import qantas from '../../../public/assets/images/company-qantas.png';
import todaytix from '../../../public/assets/images/company-todaytix.png';
import workplace from '../../../public/assets/images/company-workplace.png';

const Companies = () => {
  return (
    <section id="companiessection" className="lg:py-28 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 ">
        <h2
          className="text-center font-[700] text-2xl mb-10"
          style={{
            fontFamily: 'satoshi',
            lineHeight: '46px',
            letterSpacing: '.175em',
          }}
        >
          More than 1500+ Companies{' '}
          <span className="underline text-[#fba602]">Trust Us!</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <Image src={ilat} alt="Ilat" />
          <Image src={pdotcom} alt="pdotcom" />
          <Image src={qantas} alt="qantas" />
          <Image src={todaytix} alt="todaytix" />
          <Image src={workplace} alt="workplace" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
