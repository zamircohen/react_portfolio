import React from 'react'
import { Block, BlockTitle, Wrapper} from '../Header/HeaderStyles';
import { ProjectBox } from './ProjectsStyles';
import './Card.css';

export default function Projects() {
  return (
    <Wrapper id="projects">
        <Block>    
            <BlockTitle main>Projects</BlockTitle>  

            <ProjectBox>
            <div class="card">
              <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect</p>
              </div>
            </div> 

            <div class="card">
              <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect</p>
              </div>
            </div> 

            <div class="card">
              <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect</p>
              </div>
            </div> 
            </ProjectBox>

        </Block>
    </Wrapper>
  )
}
