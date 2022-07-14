import { useEffect } from 'react';
import ReactGA from "react-ga4";



export const usePageAnalyitics = () => {
    useEffect(() => {
        ReactGA.initialize("G-NJW62F94ZT");
        ReactGA.send({ hitType: "pageview" });
    }, []);

}

export const eventAnalytics = (payload) =>{
    ReactGA.event(payload)
}