import React from 'react';
import styled from '@emotion/styled';
import myPic from '../images/mel-pic.jpg';

const About = ({ className, aboutRef }) => {

    return (<>
        <div className={`${className} section`} ref={aboutRef}>
            <h2>More About Me</h2>
            <div className="about-content">
                <img src={myPic} alt="" />
                <p>Hello, my name is Mel. After years of working as a graphic designer, I found my calling and fell in love with software engineering. That journey from designer to software engineer involved research, time, dedication, and curating my own curriculum for learning since I did not come from a Computer Science background. Through the process of online learning and the hands-on experience I gained the understanding that continuted education is paramount to success and moving forward in my career.
                    <br />
                    <br />
                    I’ve worked on various user centric projects from website pages to reusable React components to in&#8209;app new user journeys to integrating third&#8209;party&nbsp;tools. I'm seeking my next role to be a part of a collaborative team environment that fosters communication, trust, and continuous learning.
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
            align-items: center;
            display: flex;
            
            p {
                margin: 0 50px;
            }
        }
    }
`

export default styledAbout;