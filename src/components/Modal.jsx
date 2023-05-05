import React from 'react';
import styled from '@emotion/styled';
import Exit from '../images/exit.svg';

const Modal = ({ className, title, stack, problem, solution, video, handleExitClick, modalRef, showModal }) => {
    

    return (
        <div className={className}>
            <div className={showModal ? "modal-container active" : "modal-container"} >
                <div className="modal-controls">
                    <button onClick={handleExitClick}>
                        <img src={Exit} alt="" />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="title-stack">
                        <h2 className="title">{title}</h2>
                        <p className="stack">{stack}</p>
                    </div>

                    <div className="problem-solution">
                        <div className="problem">
                            <p className="sub-title">Problem</p>
                            <p className="content">{problem}</p>
                        </div>

                        <div className="solution">
                            <p className="sub-title">Solution</p>
                            <p className="content">{solution}</p>
                        </div>
                    </div>
                    
                    <div className="featured-video">
                        <video src={video} width="750" height="500" controls></video>
                    </div>
                    
                </div>
            </div>

            <div className="backdrop" ref={modalRef}></div>
        </div>
    )
}
    


const styledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    .backdrop {
        background: rgba(0, 0, 0, 0.5);
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 100;
    }
    .modal-container {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        height: 80vh;
        justify-content: center;
        position: fixed;
        top: 5%;
        z-index: 101;
        .modal-controls {
            button {
                background: none;
                border: none;
                padding: 10px 0;
                img {
                    height: 20px;
                    width: 20px;
                }
            }
        }
        .modal-content {
            background: var(--creme-de-la-creme);
            border-radius: 4px;
            max-width: 600px;
            overflow-y: scroll;
            padding: 40px;
            text-align: left;
            width: 75vw;
            .title-stack {
                h2.title {
                    font-size: 1.75rem;
                    margin: 0 auto;
                }
                p.stack {
                    font-size: 0.875rem;
                    text-transform: uppercase;
                }
            }
            .problem-solution {
                font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
                padding: 10px 0 50px;
                .problem, .solution {
                    p.sub-title {
                        margin: 30px auto 5px;
                    }
                    .content {
                        color: var(--coco-cosmos);
                        margin: 0;
                    }
                }
            }
            video {
                height: 45%;
                min-height: 112.5px;
                min-width: 200px;
                width: 100%;
            }
        }
    }
    
`

export default styledModal;