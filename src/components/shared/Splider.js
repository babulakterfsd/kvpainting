/* eslint-disable @next/next/no-img-element */
// Default theme
import '@splidejs/react-splide/css';

// or other themes

import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/skyblue';

// or only core styles
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';


const ImageSlider = () => {
  const data = [
    {
      id: 1,
      img: 'https://i.ibb.co/BNytc6L/paintbrush-slider.webp'
    },
    {
      id: 2,
      img: 'https://i.ibb.co/9qPwVL1/houses-slider.webp'
    },
    {
      id: 3,
      img: 'https://i.ibb.co/kgZJHsD/brush-slider.webp'
    }
  ];

  return (
    <div className="cards" data-aos="fade-down"
    data-aos-duration="2500">
      <Splide
        hasTrack={false}
        aria-label="Testimonials"
        options={{
          type: 'loop',
          focus: 'center',
          isNavigation: true,
          interval: 3000,
          gap: '0.5rem',
          pagination: true,
          perPage: 1,
          perMove: 1,
          padding: {
            right: '10rem',
            left: '10rem',
          },
          breakpoints: {
            320: {
              perPage: 1,
              perMove: 1,
              padding: {
                right: '0rem',
                left: '0rem',
              },
              width: '100%',

              pagination: false,
            },
            375: {
              perPage: 1,
              perMove: 1,
              padding: {
                right: '0rem',
                left: '0rem',
              },
              pagination: false,
            },
            425: {
              perPage: 1,
              perMove: 1,
              padding: {
                right: '0rem',
                left: '0rem',
              },
              pagination: false,
            },
            640: {
              perPage: 1,
              perMove: 1,
              padding: {
                right: '0rem',
                left: '0rem',
              },
              pagination: false,
            },
            768: {
              perPage: 1,
              perMove: 1,
              padding: {
                right: '5rem',
                left: '5rem',
              },
            },
            1024: {
              perPage: 1,
              perMove: 1,
              padding: {
                right: '5rem',
                left: '5rem',
              },
            },
          },
        }}
      >
        <SplideTrack>
          {data?.map((item) => (
              <SplideSlide key={item.id}>
                <div className="card">
                  <img src={item.img} alt="img" />
                </div>
              </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <FontAwesomeIcon
              style={{
                color: 'rgba(0, 0, 0, 0.5)',
                fontSize: '.5rem',
              }}
              icon={faArrowCircleRight}
            />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <FontAwesomeIcon
              style={{
                color: 'rgba(0, 0, 0, 0.5)',
                fontSize: '.5rem',
              }}
              icon={faArrowCircleRight}
            />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default ImageSlider;
