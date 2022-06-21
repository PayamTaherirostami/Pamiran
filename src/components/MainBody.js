import React from 'react';
import '../App.css';
import Slider from './Slider';

export default function MainBody(props) {
//   console.log(props)
    return (
     
      <div className='mainHome'>
         <Slider/>
       <div  className= "home">
         <main>
            <p> Pamiran is a global corrugated box and  membrane switch manufacturer with capabilities ranging from logic enabled membrane switch electronics to full membrane switch assemblies with beautiful full color graphic overlays.</p>
            <p>As a complete membrane switch manufacturer we produce a full line of membrane switch electronics including membrane switch backlighting and several membrane switches overlay finishes.  We own both domestic and off-shore facilities, so you need only one membrane switch manufacturer to support your entire product life cycle from prototype through volume production.
            </p>
            <p>We employ a US-based engineering staff that will work with you to refine your membrane switch designs.  And as a full spectrum membrane switch manufacturer, our engineering team has developed proprietary membrane switch technologies for back-lighting, surface finishes and actuation options.</p>
            <p>Pamiran is a full-service membrane switch manufacturer so you can source your membrane switch from the membrane switch design through the membrane switch prototype and on to volume production.  We have long history of membrane switch innovation.</p>
         </main>
         <aside>
            <figure>
               <img src="../images/E-Commerce.jpg" alt="center lale" />
               <figcaption>Contact our engineering staff to discuss your needs in a membrane switch or a customized branded box.</figcaption>
            </figure>
         </aside>
         <div className="container1">
            <blockquote><strong>
               "Premium Quality, Advanced technology and Minimum time"
               </strong>
            </blockquote>
         </div>
         <div className="tenth">
            <h4>In order to get more information about the box types you can download our catalog.</h4>
            <div className ="eleven">
               <a title="Click here to download the catalog!" href="documents/Pamiranindustries-Box_Type.pdf">
               <img id="dnl" src="../images/dnl.png" alt="the dnllogo" /></a>
            </div>
         </div>
      </div>
  </div>
  );
  }