import React from 'react'
import { Block, BlockTitle, Wrapper} from '../Header/HeaderStyles';
import { ProjectBox } from './ProjectsStyles';
import Card from '../../styles/GlobalComponents/Card';


const projects = [
  {
     "title": "To do list",
     "image": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
     "alt": "Mysterious Orange",
     "description":"A to do list application that allows you to add, delete, and edit tasks. It also allows you to mark tasks as complete or incomplete. It also allows you to sort tasks by date or by priority.",
     "tools": "NodeJS, Express, React, Redux, CSS, HTML, MongoDB, Mongoose, MongoDB Atlas, Heroku",
  },

  {
    "title": "To do list",
    "image": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "alt": "Mysterious Orange",
    "description":"A to do list application that allows you to add, delete, and edit tasks. It also allows you to mark tasks as complete or incomplete. It also allows you to sort tasks by date or by priority.",
    "tools": "NodeJS, Express, React, Redux, CSS, HTML, MongoDB, Mongoose, MongoDB Atlas, Heroku",
 },

 {
  "title": "To do list",
  "image": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "alt": "Mysterious Orange",
  "description":"A to do list application that allows you to add, delete, and edit tasks. It also allows you to mark tasks as complete or incomplete. It also allows you to sort tasks by date or by priority.",
  "tools": "NodeJS, Express, React, Redux, CSS, HTML, MongoDB, Mongoose, MongoDB Atlas, Heroku",
},
]


export default function Projects() {
  return (
    <Wrapper id="projects">
        <Block>    
            <BlockTitle main>Projects</BlockTitle>  

            <ProjectBox>

                {projects.map((item, index) => (
                    
                    <Card key={index} {...item} />
                    
                    // <div className="project-card" key={index}>
                    //     <img src={project.image} alt={project.alt} width="250px" height="auto"/>
                    //     <h2>Title: {project.title}</h2>
                    //     <p>Description: {project.description}</p>
                    //     <p>Tools: {project.tools}</p>
                    //     <button>KNOW MORE?</button>
                    // </div>

                ))}



            {/* <div class="card">
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

            <div class="card">
              <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect</p>
              </div>
            </div>  */}


            </ProjectBox>

        </Block>
    </Wrapper>
  )
}
