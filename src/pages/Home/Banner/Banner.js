import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        style={{height:'600px'}}
          className="d-block w-100"
          src={banner3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Networking</h3>
          <p>Networking is the exchange of information and ideas among people with a common profession or special interest.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'600px'}}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Machine learning</h3>
          <p>Machine learning is a method of data analysis that automates analytical model building.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'600px'}}
          className="d-block w-100"
          src={banner1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> Data science</h3>
          <p>
          Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
};

export default Banner;