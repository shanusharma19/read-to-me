import AOS from 'aos';
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import '@/styles/Home.css'
import '@/styles/Login.css'
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [])
  
  return <Component {...pageProps} />
}
