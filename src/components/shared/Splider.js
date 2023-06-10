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
      img: 'https://cdn.pixabay.com/photo/2023/04/11/16/00/brush-7917642_1280.jpg'
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2019/10/25/18/01/paintbrush-4577578_1280.jpg'
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2015/10/26/21/11/houses-1007932_1280.jpg'
    }
  ];

  return (
    <div className="cards">
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
            <>
              <SplideSlide key={item.id}>
                <div className="card">
                  <img src={item.img} alt="img" />
                </div>
              </SplideSlide>
            </>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <FontAwesomeIcon
              style={{
                color: '#000',
                fontSize: '.5rem',
              }}
              icon={faArrowCircleRight}
            />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <FontAwesomeIcon
              style={{
                color: '#000',
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
