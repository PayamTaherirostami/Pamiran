import React ,{useRef }from 'react';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import '../emailKey.js'
// import emailjs from 'emailjs';
init("MC_1FnPg91zfcX_RN");

export default function Invoice() {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(`service_nziso6e`, `template_7wblk9m`, e.target,`MC_1FnPg91zfcX_RN`)
  
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
            
         });
        }
        console.log(form);
    return ( 
        <div className='inv'>

         <ReactWhatsapp number="1-206-419-1626" message="Hello World!!!" />
        {/* <a title="Click here to see our Linkedin page!" href="https://www.linkedin.com/in/payamtaherirostami"> <img id="link" src="../images/Linkedin.png" className="center" alt="Linkedin" /></a> */}
       
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  
        </div>
     );
}
