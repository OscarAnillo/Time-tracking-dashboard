import { useState, useEffect } from 'react';
import data from '../data/data.json';

export default function InfoCards(){
    const [daily, setDaily] = useState('');
    const [weekly, setWeekly] = useState('');
    const [monthly, setMonthly] = useState('');

    return (
        <div>
            {data.map(item => (
                <div className={`${item.className} cards`} key={item.title}>
                    <div className="cards-bg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cards-row">
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.timeframes.daily.current}hrs</p>
                        </div>
                        <div>
                            <img src="images/icon-ellipsis.svg" alt="" />
                            <p>Last Week - {item.timeframes.daily.previous}hrs</p>
                        </div>
                    </div>
                </div>
            ))}     
        </div>
    )
}