import Image from 'next/image';
import axpress from '../../../public/assets/images/aexpress.png';
import discover from '../../../public/assets/images/discover.png';
import fb from '../../../public/assets/images/fby.png';
import insta from '../../../public/assets/images/instay.png';
import logo from '../../../public/assets/images/logo.png';
import master from '../../../public/assets/images/mastercard.png';
import twitter from '../../../public/assets/images/twittery.png';
import visa from '../../../public/assets/images/visa.png';

const Footer = () => {
  return (
    <section
      id="footersection"
      className="pt-10 pb-1 lg:pt-16 lg:pb-8 bg-[rgba(18,18,18,1)] text-white grid grid-cols-12"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center gap-y-6 lg:gap-y-0 mb-10 lg:mb-0 lg:mr-auto">
            <div className="flex justify-center lg:justify-start items-center lg:items-start lg:mb-9">
              <Image
                src={logo}
                alt="logo"
                height={178}
                width={186}
                className="hidden lg:block"
              />
              <Image
                src={logo}
                alt="logo"
                height={128}
                width={136}
                className="block lg:hidden"
              />
            </div>
            <div className="socialmediaicons flex gap-x-3">
              <Image src={fb} alt="fb" className="cursor-pointer" />
              <Image src={twitter} alt="twitter" className="cursor-pointer" />
              <Image src={insta} alt="insta" className="cursor-pointer" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 md:px-8 lg:ml-auto lg:mt-4">
            <div className="flex justify-center items-center gap-x-16 md:gap-x-32">
              <div className="grid-cols-1 lg:grid-cols-3">
                <h6
                  className="text-center mb-2 lg:mb-5 text-xl lg:text-2xl font-[700]"
                  style={{
                    fontFamily: 'Trade Gothic LT Std',
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
                  >
                    Our Services
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
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
                  >
                    Contact
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Projects
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    About
                  </span>
                </div>
              </div>
              <div className="grid-cols-1 lg:grid-cols-3 hidden sm:block">
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
              </div>
              <div className="grid-cols-1 lg:grid-cols-3">
                <h6
                  className="text-center mb-2 md:mb-5 text-xl lg:text-2xl font-[700]"
                  style={{
                    fontFamily: 'Trade Gothic LT Std',
                    lineHeight: '1.5rem',
                  }}
                >
                  Policies
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
                    Customer Support
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Privacy Policy
                  </span>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Refund Policy
                  </span>
                  <span
                    className="lg:hidden xl:block"
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Shipping Policy
                  </span>
                  <span
                    className="lg:hidden xl:block"
                    style={{
                      fontFamily: 'Manrope',
                      letterSpacing: '2%',
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Terms & Conditions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="flex justify-center items-center mt-8 md:mt-16">
          <div className="w-[90%] h-[1px] bg-[#687686]"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20">
          <div className="flex gap-x-6 pt-2 pb-3 lg:pb-0 md:pt-4">
            <span className="text-sm">Terms</span>
            <span className="text-sm">Privacy</span>
            <span className="text-sm">Cookies</span>
          </div>
          <div className="socialmediaicons flex gap-x-3 pt-3 md:pb-0 order-first lg:order-9">
            <Image src={visa} alt="insta" height={27} width={43} />
            <Image src={master} alt="twitter" height={27} width={43} />
            <Image src={axpress} alt="fb" height={27} width={43} />
            <Image src={discover} alt="fb" height={27} width={43} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
