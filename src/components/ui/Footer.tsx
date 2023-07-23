import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import scrollToElement from 'scroll-to-element';
import call from '../../../public/assets/images/call.png';
import fb from '../../../public/assets/images/fby.png';
import insta from '../../../public/assets/images/instay.png';
import linkedin from '../../../public/assets/images/linkedin.png';
import location from '../../../public/assets/images/location.png';
import logo from '../../../public/assets/images/logo.png';
import mail from '../../../public/assets/images/mail.png';
import twitter from '../../../public/assets/images/twittery.png';
import wtsapp from '../../../public/assets/images/wtsapp.png';

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
      <div className="col-span-12 lg:col-span-9 lg:col-start-2">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center items-center gap-y-6 lg:gap-y-0 mb-10 lg:mb-0 lg:mr-10">
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
          <div className="col-span-12 lg:col-span-9 md:px-8 lg:mt-6">
            <div className="flex justify-center flex-col md:flex-row px-3 lg:px-0 items-start gap-x-16 md:gap-x-16 lg:gap-x-20 gap-y-8">
              <div className="col-span-12 md:col-span-3 mx-auto ">
                <h6
                  className="text-center mb-2 lg:mb-5 text-xl lg:text-2xl font-[600] font-changa"
                  style={{
                    lineHeight: '1.5rem',
                  }}
                >
                  Get In Touch
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={location}
                      alt="Location"
                      width={12}
                      height={10}
                      className="hidden object-contain lg:block"
                    />
                    <Image
                      src={location}
                      alt="Location"
                      width={16}
                      height={10}
                      className="object-contain sm:mt-1 lg:hidden"
                    />
                    <p className="font-manrope text-[#868c98] text-[15px]">
                      3665 As
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={call}
                      alt="Call"
                      width={15}
                      height={15}
                      className="hidden object-contain lg:block"
                    />
                    <Image
                      src={call}
                      alt="Call"
                      width={12}
                      height={10}
                      className="object-contain lg:hidden"
                    />
                    <p className="font-manrope text-[#868c98] text-[15px]">
                      +32 491 64 21 24
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={wtsapp}
                      alt="Call"
                      width={15}
                      height={15}
                      className="hidden object-contain lg:block"
                    />
                    <Image
                      src={wtsapp}
                      alt="Call"
                      width={12}
                      height={10}
                      className="object-contain lg:hidden"
                    />
                    <p className="font-manrope text-[#868c98] text-[15px]">
                      +32 491 64 21 24
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={mail}
                      alt="Mail"
                      width={15}
                      height={15}
                      className="hidden object-contain lg:block"
                    />
                    <Image
                      src={mail}
                      alt="Mail"
                      width={12}
                      height={10}
                      className="object-contain lg:hidden"
                    />
                    <p className="font-manrope text-[#868c98] text-[15px]">
                      <Link href="kieran@kvpainting.be">
                        kieran@kvpainting.be
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 mx-auto">
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
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => router.push('/')}
                    className="cursor-pointer  font-manrope tracking-[.32px]"
                  >
                    Home
                  </span>
                  <span
                    style={{
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => scrollTo('#service')}
                    className="cursor-pointer  font-manrope tracking-[.32px]"
                  >
                    Onze Diensten
                  </span>
                  <span
                    style={{
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => scrollTo('#projects')}
                    className="cursor-pointer  font-manrope tracking-[.32px]"
                  >
                    Projecten
                  </span>
                  <span
                    style={{
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    onClick={() => scrollTo('#contactsection')}
                    className="cursor-pointer  font-manrope tracking-[.32px]"
                  >
                    Contact
                  </span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 mx-auto">
                <h6
                  className="text-center mb-2 md:mb-5 text-xl lg:text-2xl font-[600]  font-manrope tracking-[.32px]"
                  style={{
                    lineHeight: '1.5rem',
                  }}
                >
                  Policies
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <span
                    style={{
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                    className="cursor-pointer  font-manrope tracking-[.32px]"
                  >
                    Privacy Beleid
                  </span>
                  <span
                    className="lg:hidden xl:block cursor-pointer  font-manrope tracking-[.32px]"
                    style={{
                      fontWeight: 300,
                      color: 'rgba(134, 140, 152, 1)',
                    }}
                  >
                    Algemene Voorwaarden
                  </span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 hidden lg:block">
                <h6
                  className="text-center mb-2 md:mb-5 text-xl lg:text-2xl font-[600] font-changa"
                  style={{
                    lineHeight: '1.5rem',
                  }}
                >
                  Social
                </h6>
                <div className="flex flex-col lg:flex-row gap-x-3 gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <Link href="https://www.facebook.com">
                    <Image
                      src={fb}
                      alt="fb"
                      className="cursor-pointer hover:scale-110 duration-300 transition-all"
                      height={60}
                      width={60}
                    />
                  </Link>
                  {/* <Link href="https://www.twitter.com">
                    <Image
                      src={twitter}
                      alt="twitter"
                      className="cursor-pointer  hover:scale-110 duration-300 transition-all"
                      height={60}
                      width={60}
                    />
                  </Link> */}
                  <Link
                    href="https://be.linkedin.com/in/kieran-vonghia-307495202"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="cursor-pointer  hover:scale-110 duration-300 transition-all"
                      height={60}
                      width={60}
                    />
                  </Link>
                  <Link href="https://www.instagram.com">
                    <Image
                      src={insta}
                      alt="insta"
                      className="cursor-pointer  hover:scale-110 duration-300 transition-all"
                      height={60}
                      width={60}
                    />
                  </Link>
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
            <Link href="https://be.linkedin.com/in/kieran-vonghia-307495202">
              <Image src={linkedin} alt="linkedin" height={25} width={25} />
            </Link>
            <Image src={twitter} alt="fb" height={25} width={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
