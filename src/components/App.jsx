import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';

const App = ({className}) => {
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const handleMenuClick = (getPage) => {
    switch(getPage) {
      case 'aboutRef':
        return aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      case 'experienceRef':
        return experienceRef.current.scrollIntoView({ behavior: 'smooth' });
      case 'workRef':
        return workRef.current.scrollIntoView({ behavior: 'smooth' });
      case 'contactRef':
        return contactRef.current.scrollIntoView({ behavior: 'smooth' });
      default:
        return aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
}

  return (<>
    <div className={className}>
      <header>
        <NavBar handleMenuClick={handleMenuClick} />
      </header>
      
      <div className="page-content">
        <Intro />
        <About aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Work workRef={workRef} />
        <Contact contactRef={contactRef} />
      </div>
    </div>
    </>);
}

const styledApp = styled(App)`
  position: relative;
  text-align: center;

  header {
    background: white;
    height: 86px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .page-content {
    margin: 0 auto;
    max-width: 600px;
    padding: 40px;
  }

  .section {
    padding-top: 100px;
  }

  h1, h2 {
    color: var(--coco-cosmos);
    font-family: "Lora", 'Times New Roman', Times, serif;
  }

  h1 {
    font-size: 3.682rem;
  }

  h2 {
    font-size: 2.25rem;
    margin-bottom: 40px;
  }

  p, span, li {
    color: var(--rusty-venture);
    font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
    font-size: 1.125rem;
  }

  ul {
    color: var(--rusty-venture);
    font-family: "Lora", 'Times New Roman', Times, serif;
  }

  @media screen and (min-width: 1330px) {
    .page-content {
      max-width: 860px;
    }

    .section {
      padding-top: 150px;
    }

    h1, h2, p, span {
      text-align: left;
    }
    
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    p, span {
      font-size: 1.25rem;
    }
  }
`

export default styledApp;
