import React from 'react';
import styled from '@emotion/styled';
import myPic from '../images/mel-pic.jpg';

const About = ({ className, aboutRef }) => {

    return (<>
        <div className={`${className} section`} ref={aboutRef}>
            <h2>More About Me</h2>
            <div className="about-content">
                <img src={myPic} alt="" />
                <p>Hello, my name is Mel. After years of working as a graphic designer, I fell in love with web development. Through a lot of online courses, hands-on learning, and copious amounts of googling I was fortunate enough to professionally transition from a designer to web developer and eventually to software&nbsp;engineer.
                    <br />
                    <br />
                    I’ve worked on various user centric projects from website pages to reusable react components to in&#8209;app new user journeys to integrating third&#8209;party&nbsp;tools.
                </p>
            </div>
        </div>
    </>)  
}

const styledAbout = styled(About)`
    .about-content {
        img {
            border-radius: 50%;
            height: 150px;
            width: 150px;
        }
    }

    @media screen and (min-width: 1330px) {
        .about-content {
            display: flex;
            
            p {
                margin: 0 50px;
            }
        }
    }
`

export default styledAbout;