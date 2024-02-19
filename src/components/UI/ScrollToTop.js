import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

export default function Scroll() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <ScrollToTop smooth color={'cornflowerblue'} style={{'bottom': '90px','background-color': 'black'}}/>)
}
