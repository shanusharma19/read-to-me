import AOS from 'aos';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import '@/styles/Home.css'
import '@/styles/Login.css'
import '@/styles/SignUp.css'
import '@/styles/LoginPassword.css'
import '@/styles/LearningChannel.css'
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
