import React, { useRef, useStat, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import './index.css';
import base from '../base';

const App = ({className}, props) => {
  // const [getPage, setGetPage] = useState('');
  const storeId = props.match.params.storeId;
    const localStorageRef = localStorage.getItem(storeId);

    console.log(storeId);
    console.log(localStorageRef);

    // const [fishes, setFishes] = useState({});
    // const [order, setOrder] = useState(JSON.parse(localStorageRef) || {})

    // useEffect(() => {
    //     if (localStorageRef) {
    //         setOrder(JSON.parse(localStorageRef));
    //     }
    //     const ref = base.syncState(`${storeId}/fishes`, {
    //         context: {
    //           setState: ({ fishes }) => setFishes({ ...fishes }),
    //         },
    //         state: 'fishes'
    //       })
      
    //       return () => {
    //         base.removeBinding(ref);
    //       }
    //   }, []);

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
    }
    console.log(`${getPage}`);
    // {getPage && `${getPage}`.current.scrollIntoView({ behavior: 'smooth' })}
    // getPage.current.scrollIntoView({ behavior: 'smooth' })
}

const addFormFill = (newForm) => {
  // const addFishes = { ...fishes, [`fish${Date.now()}`]: fish };
  // setFishes(addFishes);
  // base.post(`${storeId}/fishes`, {
  //     data: addFishes
  // });
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
    background: var(--creme-de-la-creme);
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
`

export default styledApp;
