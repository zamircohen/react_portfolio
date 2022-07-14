import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import { SectionDivider } from '../components/Header/HeaderStyles'
import { PageWrapper } from './PageWrapper'
import Tech from '../components/Tech/Tech'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import ScrollButton from '../styles/GlobalComponents/ScrollButton'
import Theme from '../styles/theme'
// import { HashLink } from 'react-router-hash-link';

export default function StartPage() {
  return (
    <div>
        <Theme>
        <PageWrapper>
        <NavBar />
        {/* <SectionDivider /> */}
        <Header />
        <About />
        <Projects />
        <Tech />
        <Contact />
        <Footer />
        {/* <HashLink smooth to="/#top">Link to Top of Page</HashLink> */}
        <ScrollButton />
        </PageWrapper>
        </Theme>
    </div>

  )
}
