import React from 'react'
import { Block, BlockTitle, Wrapper} from '../Header/HeaderStyles';
import { ProjectBox } from './ProjectsStyles';
import Card from '../../styles/GlobalComponents/Card';
import { Fade } from "react-awesome-reveal";
import todolist from '../../assets/todolist.jpg';

const projects = [
  {
     "title": "To do list",
     "image": '/images/todolist.jpg',
     "alt": "A photo of something",
     "description":"A to do list application that allows you to add, delete, and edit tasks. It also allows you to mark tasks as complete or incomplete. It also allows you to sort tasks by date or by priority.",
     "tools": "NodeJS, Express, React, Redux, CSS, HTML, MongoDB, Mongoose, MongoDB Atlas, Heroku",
     "link": "https://todolist-react-redux.herokuapp.com/"
  },

  {
    "title": "To do list",
    "image": '/images/coming_soon.jpg',
    "alt": "Mysterious Orange",
    "description":"A to do list application that allows you to add, delete, and edit tasks. It also allows you to mark tasks as complete or incomplete. It also allows you to sort tasks by date or by priority.",
    "tools": "NodeJS, Express, React, Redux, CSS, HTML, MongoDB, Mongoose, MongoDB Atlas, Heroku",
    "link": "https://todolist-react-redux.herokuapp.com/"
 },

 {
  "title": "To do list",
  "image": '/images/coming_soon.jpg',
  "alt": "Mysterious Orange",
  "description":"A to do list application that allows you to add, delete, and edit tasks. It also allows you to mark tasks as complete or incomplete. It also allows you to sort tasks by date or by priority.",
  "tools": "NodeJS, Express, React, Redux, CSS, HTML, MongoDB, Mongoose, MongoDB Atlas, Heroku",
  "link": "https://todolist-react-redux.herokuapp.com/",
},
]


export default function Projects() {
  return (
    <Wrapper id="projects">
      <Fade delay={200}>
        <Block>    
            <BlockTitle main>Projects</BlockTitle>  
        <br />
            <ProjectBox>
                {projects.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </ProjectBox>
        </Block>
        </Fade>
    </Wrapper>
  )
}
