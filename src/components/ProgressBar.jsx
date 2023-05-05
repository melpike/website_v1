import React, { useState, useEffect } from 'react';

const ProgressBar = ({ name, level }) => {
    const [showLevel, setShowLevel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setShowLevel(level);
          }, 2000);
    }, []);
       
    const progressStyles = {                
        background: 'var(--green-dream)',
        borderRadius: '50px',
        height: '10px',
        transition: 'ease-in-out all 300ms',
        width:`${showLevel}%`,
    };

    return (
        <div className="skill-container" key={name}>
            <div className="skill-name">{name}</div>
            <div className="skill-level" style={progressStyles}></div>
        </div>
    )
};

export default ProgressBar;