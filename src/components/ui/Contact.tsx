'use client';
import Image from 'next/image';
import { useState } from 'react';
import fb from '../../../public/assets/images/fbc.png';
import lnkdin from '../../../public/assets/images/lnkdinc.png';
import twtr from '../../../public/assets/images/twitterc.png';
import Styles from '../../styles/contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      address,
      message,
    };
    alert('Message sent, Thank you!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      id="contactsection"
      className="py-20 lg:py-28 grid grid-cols-12 overflow-x-hidden"
    >
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 px-7 lg:px-0">
        <div
          className={`${Styles.contactbg} pt-6 pb-52 rounded-2xl lg:py-0 lg:rounded-3xl px-7 lg:px-0`}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="textcontainer flex flex-col lg:justify-start lg:items-start">
            <h2
              className="text-3xl text-center lg:text-left lg:text-5xl  text-uppercase font-semibold lg:font-semibold lg:pt-14 lg:pl-20 leading-[38px] lg:leading[61px] font-changa"
              style={{
                letterSpacing: '2%',
              }}
            >
              Klaar Om <br /> Je Droomhuis <br /> Kleurrijk Te Maken?
            </h2>
            <div className="w-42 mt-2.5 lg:mt-6 lg:pb-14 lg:pl-20 text-center lg:text-left">
              <button className="bg-black px-10 py-4 text-white">
                Start nu! (coming soon)
              </button>
            </div>
          </div>
        </div>
        <div className="contactways mt-10 lg:mt-20 font-changa">
          <div
            className="bg-[rgba(248,248,248,.9)] shadow-sm lg:shadow-2xl pt-9 pb-6 rounded-lg px-3 lg:px-0 lg:rounded-sm flex flex-col justify-center items-center relative"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="self-center lg:-ml-64">
              <h3
                className="text-[28px] lg:text-4xl font-bold"
                style={{ opacity: '.75' }}
              >
                Get In Touch
              </h3>
              <p className="mb-10 lg:ml-1.5" style={{ opacity: '.50' }}>
                Hoe kunnen we je helpen?
              </p>
            </div>
            <div className="">
              <form className="md:w-[508px] " onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Jouw naam"
                  className="h-14 shadow-md focus:shadow-xl border-none focus:outline-none w-full px-5 text-[#9F9F9F] mb-8 lg:tracking-[1.135px]"
                  style={{
                    borderRadius: '5px',
                    fontFamily: 'Poppins',
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Jouw emailadres"
                  className="h-14 shadow-md focus:shadow-xl border-none focus:outline-none w-full px-5 text-[#9F9F9F] mb-8 lg:tracking-[1.135px]"
                  style={{
                    borderRadius: '5px',
                    fontFamily: 'Poppins',
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Jouw Adres"
                  className="h-16 shadow-md focus:shadow-xl border-none focus:outline-none w-full px-5 text-[#9F9F9F] mb-3 py-4 lg:tracking-[1.135px]"
                  style={{
                    borderRadius: '5px',
                    fontFamily: 'Poppins',
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <textarea
                  placeholder="Jouw vraag, bericht, opmerking"
                  className="h-44 shadow-md focus:shadow-xl border-none focus:outline-none w-full px-5 text-[#9F9F9F] mb-3 py-4 lg:tracking-[1.135px]"
                  style={{
                    borderRadius: '5px',
                    fontFamily: 'Poppins',
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[rgba(251,199,2,1)] lg:px-6 py-4  text-black mt-3 lg:mt-1 font-semibold w-full capitalize opacity-95"
                  >
                    Dien in
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden absolute -right-10 bottom-10 bg-[rgba(251,199,2,1)] lg:flex flex-col gap-y-6 px-3 py-10 rounded-br-full">
              <a href="#" target="_blank">
                <Image
                  src={fb}
                  alt="facebook"
                  className="h-4 w-4 hover:rotate-45 hover:transition-all duration-100"
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  src={twtr}
                  alt="twitter"
                  className="h-4 w-4 hover:rotate-45 hover:transition-all duration-100"
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  src={lnkdin}
                  alt="linkedin"
                  className="h-4 w-4 hover:rotate-45 hover:transition-all duration-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
