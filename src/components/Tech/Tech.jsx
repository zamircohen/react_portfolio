import React from 'react'
import { SectionTitle, Section, BlockTitle, Block, SectionText, Wrapper, BlockText} from '../Header/HeaderStyles';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Card from '../../styles/GlobalComponents/Card';
import Marquee from "react-fast-marquee"
import { MarqueeBlock } from './TechStyles';
import { DiJavascript, DiSass, DiReact, DiMongodb, DiGithubBadge, DiNodejsSmall, DiCss3, DiHtml5, DiJqueryLogo, DiMysql, DiDatabase, DiGitBranch, DiTrello, DiDocker} from 'react-icons/di';


export default function Tech() {
  return (
    <Wrapper id="tech">
        <Block>    
            <BlockTitle main>Tech</BlockTitle>     
            <MarqueeBlock>
            <Marquee speed="120" style={""} direction="left" gradientColor="transparent">
               <DiJavascript size="10rem" style={{fill:"yellow"}} alt="Javascript logo"/>
               <DiJqueryLogo size="10rem" style={{fill:"red"}}/>
               <DiGithubBadge size="10rem" style={{fill:"white"}}/>
               <DiMongodb size="10rem" style={{fill:"green"}}/>
               <DiReact size="10rem" style={{fill:"blue"}}/>
               <DiHtml5 size="10rem" style={{fill:"orange"}}/>
               <DiSass size="10rem" style={{fill:"pink"}}/>
               <DiNodejsSmall size="10rem" style={{fill:"green"}}/>
               <DiCss3 size="10rem" style={{fill:"blue"}}/>
               <DiDatabase size="10rem" style={{fill:"grey"}}/>
               <DiDocker size="10rem" style={{fill:"blue"}}/>
               <DiTrello size="10rem" style={{fill:"lightblue"}}/>
               <DiMysql size="10rem" style={{fill:"orange"}}/>
            </Marquee>
            </MarqueeBlock>
        <BlockText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus saepe inventore delectus neque corporis officia nostrum quae voluptates est, ipsa iure dolorum odit nam praesentium, ratione aliquid alias vero.</BlockText>
          
        </Block>
    </Wrapper>
  )
}
