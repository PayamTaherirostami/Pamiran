import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import MainBody from './components/MainBody';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from'./components/Main';

 function App()  {
const [showMain, setShow]=useState(true);

    return  (
      <div id="wrapper">
        <Header />
          {<Nav  setShow={setShow}/>}
          {showMain && <MainBody show={showMain} />}
        <Banner />
        <Footer setShow={setShow} />
        {/* <Main/> */}
              </div>
    );
  }

export default App;
