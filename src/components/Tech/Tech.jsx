import React from 'react'
import { SectionTitle, Section, BlockTitle, Block, SectionText, Wrapper} from '../Header/HeaderStyles';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Card from '../../styles/GlobalComponents/Card';
import Marquee from "react-fast-marquee"
import { MarqueeBlock } from './TechStyles';
import { DiJavascript, DiSass, DiReact, DiMongodb, DiGithubBadge, DiNodejsSmall, DiCss3, DiHtml5, DiJqueryLogo, DiMysql, DiDatabase, DiGitBranch, DiTrello} from 'react-icons/di';


export default function Tech() {
  return (
    <Wrapper id="tech">
        <Block>    
            <BlockTitle main>Tech</BlockTitle>     
            <MarqueeBlock>
            <Marquee speed="120" style={""} direction="left" gradientColor="transparent">
               <DiJavascript size="15rem" style={{fill:"yellow"}} alt="Javascript logo"/>
               <DiJqueryLogo size="15rem" style={{fill:"red"}}/>
               <DiGithubBadge size="15rem" style={{fill:"white"}}/>
               <DiMongodb size="15rem" style={{fill:"green"}}/>
               <DiReact size="15rem" style={{fill:"blue"}}/>
               <DiHtml5 size="15rem" style={{fill:"orange"}}/>
               <DiSass size="15rem" style={{fill:"pink"}}/>
               <DiNodejsSmall size="15rem" style={{fill:"green"}}/>
               <DiDatabase size="15rem" style={{fill:"grey"}}/>
               <DiCss3 size="15rem" style={{fill:"blue"}}/>
               <DiTrello size="15rem" style={{fill:"lightblue"}}/>
               <DiMysql size="15rem" style={{fill:"orange"}}/>
            </Marquee>
            </MarqueeBlock>
        </Block>
    </Wrapper>
  )
}
