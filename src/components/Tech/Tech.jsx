import React from 'react'
import { SectionTitle, Section, BlockTitle, Block, SectionText, Wrapper} from '../Header/HeaderStyles';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Card from '../../styles/GlobalComponents/Card';

const products = [
  {
     "description":"Please don't eat this one... for real!",
     "id":16065,
     "images":[
        {
           "alt":"an orange painted blue",
           "src":{
              "large":"https://was-reach-hackathon-img.vercel.app/mysterious-orange_L.jpg",
              "medium":"https://was-reach-hackathon-img.vercel.app/mysterious-orange_M.jpg",
              "small":"https://was-reach-hackathon-img.vercel.app/mysterious-orange_S.jpg"
           }
        }
     ],
     "name":"Mysterious Orange",
     "price":324,
     "rating":4.7,
     "stock":7
  },
  {
     "description":"Get this rare pieace of tech that has been hand painted in a matte white finnish!",
     "id":18272,
     "images":[
        {
           "alt":"a white playstation",
           "src":{
              "large":"https://was-reach-hackathon-img.vercel.app/white-playstation_L.jpg",
              "medium":"https://was-reach-hackathon-img.vercel.app/white-playstation_M.jpg",
              "small":"https://was-reach-hackathon-img.vercel.app/white-playstation_S.jpg"
           }
        }
     ],
     "name":"White Playstation",
     "price":4595,
     "rating":4.5,
     "stock":2
  }]

export default function Tech() {
  return (
    <Wrapper id="tech">
        <Block>    
            <BlockTitle main>Tech</BlockTitle>     
          
         {products.map((item, index) => {
            
            return <Card key={index} {...item} />
              })
         }
        </Block>
    </Wrapper>
  )
}
