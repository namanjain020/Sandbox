'use client'
import Content from './content';
import React, { useState, useEffect } from 'react';

const DelayedRenderComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Set a timeout to show the component after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [/* dependency array */]);

  return (
    <div>
      {showComponent && <Content />}
    </div>
  );
};

export default DelayedRenderComponent;
