// import React, { useEffect, useState } from 'react';

// const ScrollLine = () => {
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       if (scrollY > 50) { // Change 100 to whatever scroll height you want
//         setIsActive(true);
//       } else {
//         setIsActive(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`scroll-line ${isActive ? 'active' : ''}`}></div>
//   );
// };

// export default ScrollLine;
import React, { useEffect, useState } from 'react';

const ScrollLine = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (scrollTop / docHeight) * 100;
      setLineHeight(scrolledPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-line-container">
      <div className="scroll-line" style={{ height: `${lineHeight}%` }}></div>
    </div>
  );
};

export default ScrollLine;

