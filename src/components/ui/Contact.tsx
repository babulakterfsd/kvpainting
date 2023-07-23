'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import fb from '../../../public/assets/images/fbc.png';
import lnkdin from '../../../public/assets/images/lnkdinc.png';
import twtr from '../../../public/assets/images/twitterc.png';
import Styles from '../../styles/contact.module.css';

const Contact = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      first_name: fname,
      last_name: lname,
      phone_number: phoneNumber,
      email,
      user_message: message,
    };

    await fetch(
      'https://7hw3mpqkx1.execute-api.eu-central-1.amazonaws.com/dev/kvpainting_form',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success('Bedankt, we nemen snel contact met je op!');
        setFName('');
        setLName('');
        setPhoneNumber('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        toast.error('Er is iets misgegaan, probeer het opnieuw');
      });
  };

  return (
    <section className="py-20 lg:py-28 grid grid-cols-12 overflow-x-hidden ">
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 px-7 lg:px-0">
        <div
          className={`${Styles.contactbg} pt-6 pb-52 rounded-2xl lg:py-0 lg:rounded-3xl px-7 lg:px-0`}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="textcontainer flex flex-col lg:justify-start lg:items-start">
            <h2
              className={` text-3xl text-center lg:text-left lg:text-5xl  text-uppercase font-[700] lg:font-semibold lg:pt-14 lg:pl-20 leading-[38px] lg:leading[61px] font-changa`}
              style={{
                letterSpacing: '1.4px',
              }}
            >
              Klaar Om <br /> Je Droomhuis <br /> Kleurrijk Te Maken?
            </h2>
            <div
              className={` w-42 mt-2.5 lg:mt-6 lg:pb-14 lg:pl-20 text-center lg:text-left`}
            >
              <button className="bg-black px-10 py-4 text-white hidden">
                Start nu! (coming soon)
              </button>
            </div>
          </div>
        </div>
        <div
          className="contactways mt-10 lg:mt-20 font-changa"
          id="contactsection"
        >
          <div
            className="bg-[rgba(248,248,248,.9)] shadow-sm lg:shadow-2xl pt-9 pb-6 rounded-lg px-3 lg:px-0 lg:rounded-sm flex flex-col justify-center items-center relative"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="self-center lg:-ml-64">
              <h3
                className="text-[28px] lg:text-4xl font-bold font-changa"
                style={{ opacity: '.75' }}
              >
                Get In Touch
              </h3>
              <p
                className="mb-10 lg:ml-1.5 font-changa"
                style={{ opacity: '.50' }}
              >
                Hoe kunnen we je helpen?
              </p>
            </div>
            <div className="">
              <form className="md:w-[508px] " onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Voornaam*"
                  className="border-none h-14 shadow-md focus:shadow-xl  focus:outline-none w-full px-5 text-[#606060] mb-8 lg:tracking-[.32px] font-changa text-[15px]"
                  style={{
                    borderRadius: '5px',
                  }}
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Achternaam*"
                  className="border-none h-14 shadow-md focus:shadow-xl  focus:outline-none w-full px-5 text-[#606060] mb-8 lg:tracking-[.32px] font-changa text-[15px]"
                  style={{
                    borderRadius: '5px',
                  }}
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Jouw emailadres*"
                  className="h-14 shadow-md focus:shadow-xl border-none focus:outline-none w-full px-5 text-[#606060] mb-8 lg:tracking-[.32px] font-changa text-[15px]"
                  style={{
                    borderRadius: '5px',
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Jouw telefoonnummer"
                  className="h-14 shadow-md focus:shadow-xl border-none focus:outline-none w-full px-5 text-[#606060] mb-8 lg:tracking-[.32px] font-changa text-[15px]"
                  style={{
                    borderRadius: '5px',
                  }}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <textarea
                  placeholder="Jouw vraag, bericht, opmerking*"
                  name="message"
                  className="h-44 shadow-md focus:shadow-xl border-none focus:outline-none w-full px-5 text-[#525151] mb-3 py-4 lg:tracking-[.32px] font-changa text-[15px]"
                  style={{
                    borderRadius: '5px',
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
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
              <a
                href="https://be.linkedin.com/in/kieran-vonghia-307495202"
                target="_blank"
              >
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
      <Toaster />
    </section>
  );
};

export default Contact;
