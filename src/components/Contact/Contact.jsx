import React from 'react'
import { SectionTitle, Block, Section, SectionText, Wrapper, BlockTitle} from '../Header/HeaderStyles';
import { Form } from './ContactStyles';


export default function Contact() {
  return (
    <Wrapper id="contact">
        <Block>    
            <BlockTitle main>Contact me.</BlockTitle>     
            <Form>
                
                <input type="text" placeholder='Your name*' required="true"/>
                
                <input type="text" placeholder='Your comnpany'/>
                
                <input type="text" placeholder='Your email*' />
                
                <input type="tel" placeholder='Phonenumber' />
                
                <textarea placeholder='Your message'></textarea>
                <br />
                <button> SUBMIT </button>
            </Form>
        </Block>
    </Wrapper>
  )
}
