import Image from 'next/image';
import email from '../../../public/assets/images/contact-email.png';
import location from '../../../public/assets/images/contact-location.png';
import telephone from '../../../public/assets/images/contact-telephone.png';
import Styles from '../../styles/contact.module.css';

const Contact = () => {
  return (
    <section id="contactsection" className="py-20 lg:py-28 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 px-7 lg:px-0">
        <div
          className={`${Styles.contactbg} pt-6 pb-52 rounded-2xl lg:py-0 lg:rounded-3xl px-7 lg:px-0`}
        >
          <div className="textcontainer flex flex-col lg:justify-start lg:items-start">
            <h2
              className="text-4xl text-center lg:text-left lg:text-6xl font-[400] text-uppercase lg:pt-14 lg:pl-20 leading-[38px] lg:leading[61px]"
              style={{
                fontFamily: 'modular14',
                letterSpacing: '2%',
              }}
            >
              Making Your <br className="lg:hidden" /> Dream{' '}
              <br className="hidden lg:block" /> Home a{' '}
              <br className="lg:hidden" /> Colorful <br className=" lg:block" />{' '}
              Reality
            </h2>
            <div className="w-42 mt-2.5 lg:mt-6 lg:pb-14 lg:pl-20 text-center lg:text-left">
              <button className="bg-black px-10 py-4 text-white">
                Let's Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="contactways mt-10 lg:mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col justify-center items-center">
              <Image src={telephone} alt="telephone" width={125} height={125} />
              <p
                className="text-center text-[1.1rem] font-[400] mt-1.5 lg:mt-9 lg:mb-4"
                style={{ fontFamily: 'Manrope', lineHeight: '25px' }}
              >
                Telephone
              </p>
              <h5
                className="font-[700]"
                style={{ fontFamily: 'Trade Gothic LT Std' }}
              >
                (03) 8770 2255 <br /> (03) 8770 2255
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center my-10 lg:my-0">
              <Image src={location} alt="location" width={125} height={125} />
              <p
                className="text-center text-[1.1rem] font-[400] mt-1.5 lg:mt-9 lg:mb-4"
                style={{ fontFamily: 'Manrope', lineHeight: '25px' }}
              >
                Address
              </p>
              <h5
                className="font-[700]"
                style={{ fontFamily: 'Trade Gothic LT Std' }}
              >
                40 Brunel Road, Seaford, <br /> Victoria 3198 Australia
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={email} alt="email" width={125} height={125} />
              <p
                className="text-center text-[1.1rem] font-[400] mt-1.5 lg:mt-9 lg:mb-4"
                style={{ fontFamily: 'Manrope', lineHeight: '25px' }}
              >
                Email
              </p>
              <h5
                className="font-[700]"
                style={{ fontFamily: 'Trade Gothic LT Std' }}
              >
                contact@company.com
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
