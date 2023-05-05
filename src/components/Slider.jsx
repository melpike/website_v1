import React from 'react';
import styled from '@emotion/styled';

const Slider = ({ className, imageUrl, active, onClick }) => {
    let isDesktopSize = window.innerWidth >= 1330;

    return (
        <div className={className}>
            {active && 
                <div className="slide">
                    <img src={imageUrl} alt="" height={isDesktopSize ? "491": "324"} width={isDesktopSize ? "600": "400"} />
                    <div className="slide-label">
                        <button onClick={onClick}>Learn More</button>
                    </div>
                </div>
            }
        </div>
    )
}

const styledSlider = styled(Slider)`
    .slide {
        box-shadow: 0 0 12px rgba(0,0,0,0.25);
        border-radius: 4px 4px 0 0;
        color: white;
        display: flex;
        flex-direction: column;
        font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
        max-width: 400px;
        width: 77vw;
        &.active {
            border: solid 2px green;
        }
        img {
            border-radius: 4px 4px 0 0;
            height: auto;
            max-width: 100%;
        }
        .slide-label {
            background: var(--rusty-venture);
            border-radius: 0 0 4px 4px;
            padding: 20px 0;
            button {
                background: none;
                border: none;
                color: var(--creme-de-la-creme);
                font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                text-decoration: underline;
                text-transform: uppercase;
                outline: none;
                transition: ease-in-out all 250ms;
                &:hover {
                    opacity: 0.75;
                    transition: ease-in-out all 250ms;
                }
            }
        }
    }

    @media screen and (min-width: 1330px) {
        .slide {
            max-width: 600px;
        }
    }
`

export default styledSlider;