import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from 'gsap'

export default function MainCard(){

    useEffect(() => {
        gsap.fromTo('.section-card', {
            x: -200,
            opacity: 0,
            duration: 1,
            ease: 'elastic'
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'back'
        })
        gsap.fromTo('.avatar', {
            y: -20,
            opacity: 0,
            delay: .5,
            duration: 1,
            ease: 'elastic'
        }, {
            y: 0,
            opacity: 1,
            delay: .5,
            duration: 1,
            ease: 'elastic'
        })
        gsap.fromTo('.avatar-text', {
            y: 20,
            opacity: 0,
            delay: .8,
            duration: 1,
            ease: 'elastic'
        }, {
            y: 0,
            opacity: 1,
            delay: .8,
            duration: 1,
            ease: 'elastic'
        })
        gsap.fromTo('.main-nav', {
            y: 20,
            opacity: 0,
            delay: 1,
            duration: 1,
            ease: 'elastic'
        }, {
            y: 0,
            opacity: 1,
            delay: 1,
            duration: 1,
            ease: 'elastic'
        })
    }, []);
    
    return (
        <section className="section-card">
            <div className="main-card"> 
                <div className="avatar">
                    <img src="/images/image-jeremy.png" alt="" />
                </div>
                <div className="avatar-text">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/daily">Daily</Link></li>
                    <li><Link to="/weekly">Weekly</Link></li>
                    <li><Link to="/monthly">Monthly</Link></li>
                </ul>
            </nav>
        </section>
    )
}