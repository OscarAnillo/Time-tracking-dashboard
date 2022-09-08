import data from '../data/data.json';

export default function InfoCardsMonthly(){
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
                            <p className='current'>{item.timeframes.monthly.current}hrs</p>
                        </div>
                        <div>
                            <img src="images/icon-ellipsis.svg" alt="" className='img-mobile'/>
                            <p className='previous'>Last Week - {item.timeframes.monthly.previous}hrs</p>
                        </div>
                    </div>
                </div>
            ))}     
        </div>
    )
}