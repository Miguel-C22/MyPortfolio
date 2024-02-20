import React from "react";

function useWindowWith(){

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      // Function to update window width
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add event listener to window resize
      window.addEventListener('resize', updateWindowWidth);
  
      // Remove event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }, []);

    return { windowWidth }
}

export default useWindowWith