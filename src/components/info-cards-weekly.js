import { useEffect } from "react";
import { gsap } from 'gsap'

import data from '../data/data.json';

export default function InfoCardsWeekly(){
    useEffect(() => {
        gsap.fromTo('.cards', {
            x: 200,
            stagger: 0.1,
            opacity: 0,
            duration: 1,
            ease: 'expo'
        }, {
            x: 0,
            stagger: 0.1,
            opacity: 1,
            duration: 1,
            ease: 'expo'
        })
    }, []);

    return (
        <div className='cards-desktop'>
            {data.map(item => (
                <div className={`${item.className} cards`} key={item.title}>
                    <div className="cards-bg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cards-row">
                        <div>
                            <h3>{item.title}</h3>
                            <p className='current'>{item.timeframes.weekly.current}hrs</p>
                        </div>
                        <div>
                            <img src="images/icon-ellipsis.svg" alt="" className='img-mobile'/>
                            <p className='previous'>Last Week - {item.timeframes.weekly.previous}hrs</p>
                        </div>
                    </div>
                </div>
            ))}     
        </div>
    )
}