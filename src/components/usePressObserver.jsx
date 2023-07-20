import React, { useState, useEffect } from 'react';

export function usePressObserver({ watchKey }) {
    const [pressed, setPressed] = useState(false);
  
    useEffect(() => {
      function handlePressStart({ code }) {
        if (pressed || (watchKey, code)) return;
        setPressed(true);
      }
  
      function handlePressFinish({ code }) {
        if (!pressed || (watchKey, code)) return;
        setPressed(false);
      }
  
      document.addEventListener("keydown", handlePressStart);
      document.addEventListener("keyup", handlePressFinish);
  
      return () => {
        document.removeEventListener("keydown", handlePressStart);
        document.removeEventListener("keyup", handlePressFinish);
      };
    }, [watchKey, pressed]);
  
    return pressed;
  }