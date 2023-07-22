import Image from 'next/image';
import { useRouter } from 'next/navigation';
import scrollToElement from 'scroll-to-element';
import fb from '../../../public/assets/images/fby.png';
import insta from '../../../public/assets/images/instay.png';
import logo from '../../../public/assets/images/logo.png';
import twitter from '../../../public/assets/images/twittery.png';

const Footer = () => {
  const router = useRouter();

  const scrollTo = (selector: any) => {
    scrollToElement(selector, { offset: 0, ease: 'linear', duration: 500 });
  };

  return (
    <section
      id="footersection"
      className="pt-10 pb-4 lg:pt-16 lg:pb-8 bg-[rgba(18,18,18,1)] text-white grid grid-cols-12 overflow-x-hidden"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center gap-y-6 lg:gap-y-0 mb-10 lg:mb-0 lg:mr-auto">
            <div className="flex justify-center lg:justify-start items-center lg:items-start lg:mb-9">
              <Image
                src={logo}
                alt="logo"
                height={158}
                width={166}
                className="hidden lg:block cursor-pointer"
                onClick={() => router.push('/')}
              />
              <Image
                src={logo}
                alt="logo"
                height={128}
                width={136}
                className="block lg:hidden cursor-auto"
                onClick={() => router.push('/')}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 md:px-8 lg:ml-auto lg:mt-6">
            <div className="flex justify-center px-3 lg:px-0 items-start gap-x-16 md:gap-x-32">
              <div className="grid-cols-1 lg:grid-cols-3">
                <h6
                  className="text-center mb-2 lg:mb-5 text-xl lg:text-2xl font-[600] font-changa"
                  style={{
                    lineHeight: '1.5rem',
                  }}
                >
                  Links
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => router.push('/')}
                    className="cursor-pointer uppercase"
                  >
                    Home
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => scrollTo('#service')}
                    className="cursor-pointer"
                  >
                    ONZE DIENSTEN
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => scrollTo('#projects')}
                    className="cursor-pointer"
                  >
                    PROJECTEN
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => scrollTo('#contactsection')}
                    className="cursor-pointer uppercase"
                  >
                    Contact
                  </span>
                </div>
              </div>
              {/* <div className="grid-cols-1 lg:grid-cols-3 hidden sm:block">
                <h6
                  className="text-center mb-1 md:mb-5 text-2xl font-[700]"
                  style={{
                    fontFamily: 'Trade Gothic LT Std',
                    lineHeight: '1.5rem',
                  }}
                >
                  Account
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    My Account
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Wish List
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Dashboard
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Payment
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Track Order
                  </span>
                </div>
              </div> */}
              <div className="grid-cols-1 lg:grid-cols-3">
                <h6
                  className="text-center mb-2 md:mb-5 text-xl lg:text-2xl font-[600] font-changa"
                  style={{
                    lineHeight: '1.5rem',
                  }}
                >
                  Policies
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  {/* <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Customer Support
                  </span> */}
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    className="cursor-pointer uppercase"
                  >
                    PRIVACY BELEID
                  </span>
                  {/* <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Refund Policy
                  </span> */}
                  {/* <span
                    className="lg:hidden xl:block"
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Shipping Policy
                  </span> */}
                  <span
                    className="lg:hidden xl:block cursor-pointer"
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    ALGEMENE VOORWAARDEN
                  </span>
                </div>
              </div>
              <div className="grid-cols-1 lg:grid-cols-3 hidden lg:block">
                <h6
                  className="text-center mb-2 md:mb-5 text-xl lg:text-2xl font-[600] font-changa"
                  style={{
                    lineHeight: '1.5rem',
                  }}
                >
                  Social
                </h6>
                <div className="flex flex-col lg:flex-row gap-x-3 gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <Image
                    src={fb}
                    alt="fb"
                    className="cursor-pointer hover:scale-110 duration-300 transition-all"
                  />
                  <Image
                    src={twitter}
                    alt="twitter"
                    className="cursor-pointer  hover:scale-110 duration-300 transition-all"
                  />
                  <Image
                    src={insta}
                    alt="insta"
                    className="cursor-pointer  hover:scale-110 duration-300 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="flex lg:hidden justify-center items-center mt-8 md:mt-16">
          <div className="w-[90%] h-[1px] bg-[#687686]"></div>
        </div>
        <div className="flex lg:hidden flex-col md:flex-row justify-between items-center px-6 md:px-20">
          <div className="flex gap-x-6 pt-2 pb-3 lg:pb-0 md:pt-4">
            <span className="text-sm mt-0.5">
              All Rights Reserved by Kieran Vonghia - 2023&copy;{' '}
            </span>
          </div>
          <div className="socialmediaicons flex gap-x-3 pt-3 md:pb-0 order-first lg:order-9 mt-3">
            <Image src={fb} alt="insta" height={25} width={25} />
            <Image src={insta} alt="twitter" height={25} width={25} />
            <Image src={twitter} alt="fb" height={25} width={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
