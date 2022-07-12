import React, { useRef } from 'react'
import { Block, Wrapper, BlockTitle, BlockText} from '../Header/HeaderStyles';
// import { Form } from './ContactStyles';
// import { useState } from 'react';
// import { send } from 'emailjs'
import emailjs from 'emailjs-com';
import './FormStyles.css';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_y2qtqn8", 
        "template_ng327zx", 
        form.current, 
        "X6YypPlAQ9WEwC-AE"
        ).then(
          result => console.log(result.text),
          error => console.log(error.text)
        );
    };


    function sayThanks() {
      document.getElementById("thankYouMessageDiv").innerHTML = "Your message";
    }

  return (
    <Wrapper id="contact">
        <Block>    
            <BlockTitle main>Contact me.</BlockTitle>     

            <form className="form" ref={form} onSubmit={() => { {sendEmail}; sayThanks() }} >
                <input className="input" type="text" placeholder='Your name*' name="name" required="true"/>
                <input className="input" type="text" placeholder='Your comnpany' name="company" />
                <input className="input" type="text" placeholder='Your email*' name="email" />
                <input className="input" type="tel" placeholder='Phonenumber' name="phone" />
                <textarea className="textarea" placeholder='Your message' name="message" ></textarea>
                <br />
                <button className="button" type="submit"> SUBMIT </button>
              </form>
              <br />
              <BlockText> Thank you for your message! </BlockText>
        </Block>
    </Wrapper>
  )
}
