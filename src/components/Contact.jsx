import React from 'react';
import styled from '@emotion/styled';
import Form from './Form';
import { LinkedinIcon } from '../images/LinkedinIcon.jsx';
import { GithubIcon } from '../images/GithubIcon.jsx';
import { CodepenIcon } from '../images/CodepenIcon.jsx';

const Contact = ({ className, contactRef, addFormFill }) => (
    <div className={`${className} section`} ref={contactRef}>
        <h2>Let's Chat!</h2>

        <div className="contact-content">
            <Form addFormFill={addFormFill} />
        </div>

        <div className="socials">
            <div className="linkedin" onClick={() => window.open('https://www.linkedin.com/in/melp18/','_blank')}>
                <LinkedinIcon />
            </div>
            <div className="github" onClick={() => window.open('https://github.com/melpike','_blank')}>
                <GithubIcon />
            </div>
            <div className="codepen" onClick={() => window.open('https://codepen.io/melpike','_blank')}>
                <CodepenIcon />
            </div>
        </div>
    </div>
)

const styledContact = styled(Contact)`
    .contact-content {
        background: #c5d3d163;
        border-radius: 4px;
        padding: 30px;
        position: relative;

        form.contact {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            label, input, textarea, button, .submitting {
                font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
                font-size: 1rem;
                font-weight: 600;
            }
            label {
                color: var(--green-dream);
                font-weight: 800;
                margin-bottom: 8px;
                text-transform: uppercase;
            }
            input, textarea {
                background: white;
                border: none;
                border-radius: 4px;
                color: var(--coco-cosmos);
                margin-bottom: 20px;
                padding: 10px;
                width: calc(100% - 20px) !important;
                ::placeholder {
                    color: var(--coco-cosmos);
                    font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
                    font-style: italic;
                    opacity: 0.75;
                }
            }
            textarea {
                height: 100% !important;
                min-height: 100px;
            }
            button {
                background: var(--green-dream);
                border: none;
                border-radius: 4px;
                color: white;
                cursor: pointer;
                margin-top: 20px;
                outline: none;
                padding: 10px 20px;
                text-transform: uppercase;
                transition: ease-in-out all 250ms;
                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
                &:hover {
                    background: #3E5957;
                    transition: ease-in-out all 250ms;
                }
            }
            .submitting {
                align-items: center;
                background: rgba(197, 211, 209, 0.85);
                border-radius: 4px;
                color: var(--green-dream);
                display: flex;
                font-size: 1.25rem;
                font-weight: 600;
                height: 100%;
                justify-content: center;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 10;
            }
        }
    }

    .socials {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .linkedin, .github, .codepen {
            border: 2px solid transparent;
            border-radius: 50%;
            cursor: pointer;
            height: 20px;
            margin: 20px 8px;
            padding: 8px;
            transition: ease-in-out 350ms;
            width: 20px;
        }

        .linkedin, .github {
            &:hover {
                background: var(--rusty-venture);
                border-radius: 50%;
                transition: ease-in-out 350ms;
                svg {
                    fill: white;
                    stroke: none;
                }
            }
        }

        .codepen {
            &:hover {
                background: var(--rusty-venture);
                border-radius: 50%;
                transition: ease-in-out 350ms;
                svg {
                    stroke: white;
                }
            }
        }
    }
`

export default styledContact;