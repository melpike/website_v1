import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Slider from './Slider';
import { WorkCard } from './WorkHelper';
import Modal from './Modal';
import { Arrow } from '../images/Arrow.jsx';

const Work = ({ className, workRef }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const modalRef = useRef(null);
    const slideCount = WorkCard.length - 1;

    const handleKeyUp = (e) => {
        if (e.keyCode === 39) {
          handleRightClick();
        }
        if (e.keyCode === 37) {
            handleLeftClick();
        }
    }

    useEffect(() => {
        window.document.addEventListener('keyup', handleKeyUp);
      
        return () => {
          window.document.removeEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyUp]);
    

    const handleLeftClick = () => {
        if (activeSlide === 0) {
            setActiveSlide(slideCount);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    }

    const handleRightClick = () => {
        if (activeSlide === slideCount) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }  
    }

    const handleOutsideClick = (event) => {
        if (event.target === modalRef.current) {
            setShowModal(false);
        }
    }

    useEffect(() => {
        if(showModal) {
            window.addEventListener("click", handleOutsideClick);
            document.body.style.overflow = "hidden";
        } else {
            window.removeEventListener("click", handleOutsideClick);
            document.body.style.overflow = "unset";
        }
    }, [showModal]);

    const handleLearnMoreClick = () => {
        setShowModal(true);
    }

    const handleExitClick = () => {
        setShowModal(false);
    }

    return (
        <div className={`${className} section`} ref={workRef}>
        <h2>Recent Projects</h2>

        <div className="slider">
            <button className="left" onClick={handleLeftClick}>
                <Arrow />
            </button>
            {WorkCard.map((item, index) => 
                (<>
                    <div className={activeSlide ? "slide-container active" : "slide-container"} key={`${item.title}-container`}>
                        <Slider
                            key={`${item.title}-key`}
                            imageUrl={item.imageUrl}
                            active={activeSlide === index}
                            index={index}
                            onClick={handleLearnMoreClick}
                            showModal={showModal}
                        />
                    </div>
                </>)
            )}
            <button className="right" onClick={handleRightClick}>
                <Arrow />
            </button>
        </div>

        {WorkCard.map((item, index) => 
            (<> 
                {showModal && activeSlide === index && 
                    <Modal 
                        title={item.title}
                        stack={item.details.stack}
                        problem={item.details.problem}
                        solution={item.details.solution}    
                        video={item.details.video}    
                        index={index}
                        handleExitClick={handleExitClick}
                        modalRef={modalRef}
                        showModal={showModal}
                    />
                }
            </>)
        )}

        <div className="selector-menu">
            {WorkCard.map((item, index) => 
            <span 
                className={activeSlide === index ? "dot active" : "dot"} 
                onClick={() => setActiveSlide(index)}
                key={`${item.title}-dot`}
            >
            </span>
        )}
        </div>
    </div>
    )
}

const styledWork = styled(Work)`
    .selector-menu {
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 20px auto;
        .dot {
            background: rgba(168, 83, 41, 0.2);
            border-radius: 50px;
            cursor: pointer;
            height: 10px;
            margin: 5px;
            transition: ease-in-out all 250ms;
            width: 10px;
            &.active {
                background: var(--rusty-venture);
                transition: ease-in-out all 250ms;
            }
        }
    }
    .slider {
        align-items: center;
        display: flex;
        justify-content: center;
        button.left, button.right {
            background: none;
            border: none;
            cursor: pointer;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 3px;
            svg {
                margin: 0 6px;
                min-width: 25px;
                polyline {
                    stroke: var(--rusty-venture);
                }
            }
        }
        button.left svg {
            transform: rotate(90deg);
        }
        button.right svg {
            transform: rotate(270deg);
        }
    }
    .slide-container {
        display: flex;
        justify-content: center;
    }
`

export default styledWork;