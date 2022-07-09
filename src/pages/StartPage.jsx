import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import { SectionDivider } from '../components/Header/HeaderStyles'
import { PageWrapper } from './PageWrapper'


export default function StartPage() {
  return (
    <div>
        <PageWrapper>
        <NavBar />
        <SectionDivider />
        <Header />
        <About />
        </PageWrapper>
    </div>

  )
}
