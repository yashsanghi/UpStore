import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import ImgComp from './ImgComp';

import i1 from '../Images/i1.jpeg';
import i2 from '../Images/CaraoselAD.png';
import i3 from '../Images/healthyNuts.png';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel interval={1000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Link to="/shops/5fa3f3cce7b70f048762d4a4/5eff8e76d75ecb3735b243b1">
          <ImgComp className="d-block w-100" src={i2} alt={`slide`} />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/shop/5f814c0fcc945c4253d0daf8">
          <ImgComp className="d-block w-100" src={i3} alt={`slide`} />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <ImgComp className="d-block w-100" src={i1} alt={`slide`} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
