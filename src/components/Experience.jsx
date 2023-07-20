import React, { useState } from 'react';
import styled from '@emotion/styled';
import DownloadIcon from '../images/download-icon.svg';
import AccordionItem from './AccordionItem';
import { Employment, Skills } from './ExperienceHelper.js';


const Experience = ({ className, experienceRef }) => {
    const [clicked, setClicked] = useState(0);

    const handleDownloadClick = () => {
        fetch('MelPike-Resume.pdf')
        .then(response => {
            response.blob()
            .then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'MelPike-Resume.pdf';
                alink.click();
            })
        })
    }

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    };
    console.log(Object.entries(Skills));

    return (
        <div className={`${className} section`} ref={experienceRef}>
        <div className="work-header">
            <h2>Work Experience</h2>

            <button className="resume" onClick={ handleDownloadClick }>
                <img src={ DownloadIcon } alt="Arrow pointing down icon for resume download" width="28px" height="18px" />
                <p className="content-semiBold">Resume</p>
            </button>
        </div>    

        <div className="experience-container">
            {Employment.map((item, index) => 
                <div className="experience-block" key={item.position}>
                    <AccordionItem 
                        title={`${item.startDate} - ${item.endDate}`} 
                        content={
                            (<>
                                <p className="company">{item.company}</p>
                                <p className="position">{item.position}</p>
                                
                                <ul>
                                    {Object.entries(item.details).map(([key, value]) => (
                                        <li className="detail-item" key={`${key}-detail`}>{value}</li>
                                    ))}
            
                                </ul>
                            </>)
                        }
                        onToggle={() => handleToggle(index)}
                        active={clicked === index}
                        key={`${item.startDate}-key`}
                    />
                </div>
            )}
        </div>

        <div className="skills">
            <h3>Technical Skills</h3>
            {Skills.map((item) => 
                <div key={`${item.title}-section`}>
                    <h3 className="skill-title">{item.title}</h3>
                    <p className="skill-list">{item.list}</p>
                </div>
            )
        }
        </div>
        
    </div>
    )
}

const styledExperience = styled(Experience)`
    align-items: center;    
    display: flex;
    flex-direction: column;
    justify-content: center;

    .work-header {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .resume {
            align-items: center;
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            padding: 10px 25px;
            margin-bottom: 40px;
            transition: ease-in-out 350ms;
            img {
                padding-right: 10px;
                width: 18px;
            }
            p.content-semiBold {
                color: var(--coco-cosmos);
                font-size: 1.25rem;
                margin: 0;
            }
            &:hover {
                background: var(--rusty-venture);
                border-radius: 4px;
                transition: ease-in-out 350ms;
                p {
                    color: var(--creme-de-la-creme);
                }
                img {
                    filter: brightness(10);
                }
                
            }
        }
    }

    .experience-container {
        width: 100%;
    }

    .skills {
        background: #c5d3d163;
        border-radius: 4px;
        margin-top: 40px;
        padding: 25px 0 30px;
        width: 100%;
        h3 {
            font-size: 1.25rem;
            font-weight: 800;
            margin: 0 0 15px;
            padding: 0 30px;
            text-align: center;
        }
        h3.skill-title {
            font-size: 1rem;
            margin: 18px 0 0;
            text-transform: uppercase;
        }
        h3, p {
            color: var(--green-dream);
            font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
        }
        p.skill-list {
            font-size: 1rem;
            font-weight: 600;
            margin: 5px 0;
            padding: 0 40px;
        }
    }

    @media screen and (min-width: 1330px) {
        .work-header {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            .resume {
                margin-bottom: 0;
            }
        }

        .skills {
            h3 {
                text-align: left;
            }
        }
    }
`

export default styledExperience;