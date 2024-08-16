import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Carousel/Slider';
import Loginmodal from '../Modals/Loginmodal';
import { appContext } from '../../Statemanagement/Statecontext';
import Categorylist from '../Categories/List/Categorylist';
import Footerhome from '../Footer/Footerhome';
import Features from '../Feautures/Features';
import styled from 'styled-components';
import { Section, Title, Header } from '../Feautures/Features';
import bos from '../Images/forJumbotron.svg';
// import Testimonials from '../Testimonials/Testimonials';

const DiwaliImg = styled.img`
  border-radius: 15px;
  width: 180px;
  height: 150px;
  margin-right: 10px;
  cursor: pointer;

  @media (min-width: 991px) {
    width: 320px;
    height: 250px;
    margin-right: 20px;
  }
`;
const DiwaliDiv = styled.div`
  margin-top: 20px;
  display: flex;
  overflow-y: scroll;
`;

const Home = () => {
  const MainContext = useContext(appContext);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <Slider />
      <Loginmodal
        show={modalShow && !MainContext.state.loggedIn}
        onhide={() => {
          setModalShow(false);
        }}
      />
      <Section>
        <Title>
          <Header>Diwali Special...</Header>
          <img src={bos} alt="icon" style={{ width: '6vw', minWidth: '50px', marginTop: '8px' }} />
        </Title>
        <DiwaliDiv>
          {' '}
          <Link to={'/shops/5fa3f3cce7b70f048762d4a4/5eff8e76d75ecb3735b243b1'}>
            <DiwaliImg src="https://upstore.in/images/2020-11-08T18:45:30.866Z-Diwali Foods.png" alt="" />
          </Link>
        </DiwaliDiv>
      </Section>

      <Categorylist />
      <Features />
      {/* <Testimonials /> */}
      <Footerhome />
    </div>
  );
};

export default Home;
