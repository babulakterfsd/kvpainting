'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import scrollToElement from 'scroll-to-element';
import Logo from '../../../public/assets/images/logo.png';
import Styles from '../../styles/navbar.module.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (selector: any) => {
    scrollToElement(selector, { offset: 0, ease: 'linear', duration: 500 });
  };

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 850);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`${
        windowHeight
          ? 'fixed top-0 bg-[rgba(255,255,255,1)] text-black shadow-2xl'
          : 'absolute top-0 text-white'
      } z-50 w-full`}
    >
      <nav
        className={` ${
          windowHeight ? 'py-4 md:py-3' : 'py-2 md:py-4'
        } sm:px-6 md:px-12`}
      >
        <div className="grid grid-cols-12">
          <div className="lg:col-start-3 lg:col-span-8 col-span-12 flex justify-between lg:gap-x-36 items-center">
            {windowHeight ? (
              <Image
                src={Logo}
                alt="KVPainting"
                height={80}
                width={70}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src={Logo}
                alt="KVPainting"
                height={138}
                width={143}
                className="cursor-pointer mr-12"
              />
            )}

            <div className="flex md:order-2">
              <button
                onClick={toggleMenu}
                data-collapse-toggle="NavBarId"
                type="button"
                className="inline-flex items-center p-2 text-base md:text-xl text-main-white rounded-lg lg:hidden hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-main-white"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`hidden w-full lg:block md:w-auto ${
                windowHeight ? 'lg:ml-16' : 'lg:ml-0'
              }`}
              id="NavBarId"
            >
              <ul className="flex flex-col items-center mt-4 lg:flex-row lg:space-x-7 md:mt-0 text-base md:text-xl  md:font-medium text-main-white">
                {/* about */}
                <li
                  onClick={() => scrollTo('#aboutsection')}
                  className="relative"
                >
                  <a
                    href="#aboutsection"
                    aria-current="page"
                    className={`${Styles.hanimation} block py-2 text-sm font-[400] `}
                    style={{
                      fontFamily: 'plus_jakarta_sansregular',
                      letterSpacing: '.1em',
                      lineHeight: '22px',
                    }}
                  >
                    ABOUT
                  </a>
                </li>
                {/* services */}
                <li onClick={() => scrollTo('#servicessection')}>
                  <a
                    href="#servicessection"
                    className={`${Styles.hanimation} block py-2 text-sm font-[400] `}
                    style={{
                      fontFamily: 'plus_jakarta_sansregular',
                      letterSpacing: '.1em',
                      lineHeight: '22px',
                    }}
                  >
                    SERVICES
                  </a>
                </li>
                {/* what we do  */}
                <li onClick={() => scrollTo('#whatwedosection')}>
                  <a
                    href="#whatwedosection"
                    className={`${Styles.hanimation} block py-2 text-sm font-[400] `}
                    style={{
                      fontFamily: 'plus_jakarta_sansregular',
                      letterSpacing: '.1em',
                      lineHeight: '22px',
                    }}
                  >
                    WORK
                  </a>
                </li>
                {/* companies */}
                <li onClick={() => scrollTo('#companiessection')}>
                  <a
                    href="#companiessection"
                    className={`${Styles.hanimation} block py-2 text-sm font-[400] `}
                    style={{
                      fontFamily: 'plus_jakarta_sansregular',
                      letterSpacing: '.1em',
                      lineHeight: '22px',
                    }}
                  >
                    COMPANIES
                  </a>
                </li>
                {/* projects */}
                <li onClick={() => scrollTo('#projectssection')}>
                  <a
                    href="#projectssection"
                    className={`${Styles.hanimation} block py-2 text-sm font-[400] `}
                    style={{
                      fontFamily: 'plus_jakarta_sansregular',
                      letterSpacing: '.1em',
                      lineHeight: '22px',
                    }}
                  >
                    PROJECTS
                  </a>
                </li>
                {/* contact */}
                <li onClick={() => scrollTo('#contactsection')}>
                  <a
                    href="#contactsection"
                    className="block text-sm font-[400] bg-[rgba(251,199,2,1)] px-5 py-2 text-black"
                    style={{
                      fontFamily: 'plus_jakarta_sansregular',
                      letterSpacing: '.1em',
                      lineHeight: '22px',
                    }}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="w-full md:w-auto block lg:hidden">
          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } flex flex-col items-center mt-4 text-base sm:text-lg bg-[#3a2828e6] text-white`}
          >
            {/* about */}
            <li
              onClick={() => {
                scrollTo('#aboutsection');
                setIsOpen(false);
              }}
            >
              <a
                href="#aboutsection"
                className="block py-2 text-sm font-[400]"
                aria-current="page"
                style={{
                  fontFamily: 'plus_jakarta_sansregular',
                  letterSpacing: '.1em',
                  lineHeight: '22px',
                }}
              >
                ABOUT
              </a>
            </li>
            {/* services */}
            <li
              onClick={() => {
                scrollTo('#servicesssection');
                setIsOpen(false);
              }}
            >
              <a href="#servicessection" className="block py-2 pl-3 ">
                SERVICES
              </a>
            </li>
            {/* what we do  */}
            <li
              onClick={() => {
                scrollTo('#whatwedosection');
                setIsOpen(false);
              }}
            >
              <a href="#whatwedosection" className="block py-2 pl-3 ">
                WORK
              </a>
            </li>
            {/* companies */}
            <li
              onClick={() => {
                scrollTo('#companiessection');
                setIsOpen(false);
              }}
            >
              <a href="#companiessection" className="block py-2 pl-3 ">
                COMPANIES
              </a>
            </li>
            {/* projects */}
            <li
              onClick={() => {
                scrollTo('#projectssection');
                setIsOpen(false);
              }}
            >
              <a href="#projectssection" className="block py-2 pl-3 ">
                PROJECTS
              </a>
            </li>
            {/* contact */}
            <li
              onClick={() => {
                scrollTo('#contactsection');
                setIsOpen(false);
              }}
            >
              <a href="#contactsection" className="block py-2 pl-3 ">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
