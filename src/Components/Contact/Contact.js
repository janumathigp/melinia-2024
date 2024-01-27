import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';

const SERVICE_ID = "service_ahi3duf";
const TEMPLATE_ID = "template_r4ya1dd";
const PUBLIC_KEY = "kjhxSKhqQ4DCCoy3Q";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
  

  <body>
    <div class="main-block">
      <div class="left-part">
        <i class="fas fa-envelope"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-mail-bulk"></i>
      </div>
      <form onSubmit={handleOnSubmit}>
        <h1>Any Queries</h1>
        <div class="info">
          
          <input type="name" name="from_name" placeholder="Name"/>
          <input type="email" name="from_email" placeholder="Email"/>
          <input type="textarea" name="message" placeholder="Type your query here..."/><br/><br/>
          <button type='submit' >Submit</button>
        </div>
        
        
      </form>
    </div>
  </body>
  );
}

export default Contact;
