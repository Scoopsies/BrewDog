import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export const scrollToTop = () => {
     window.scrollTo(0,0)
}

export const ScrollButton = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <button 
            className="toTop" 
            onClick={scrollToTop}
            style={{display: scrollY > 1500 ? 'block' : 'none'}}
            >
            
            To the Top
        </button>
    )
} 

const ScrollToTop = () => {
    const {pathname, state} = useLocation();
    useEffect(() => {
        if (state && pathname === '/') window.scrollTo(0, state.scrollPosistion)
        else window.scrollTo(0,0)
    }, [pathname])
    
    return null;
}


export default ScrollToTop