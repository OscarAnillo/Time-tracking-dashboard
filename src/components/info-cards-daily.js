import data from '../data/data.json';

export default function InfoCardsDaily(){
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
                            <p className='current'>{item.timeframes.daily.current}hrs</p>
                        </div>
                        <div>
                            <img src="images/icon-ellipsis.svg" alt="" className='img-mobile'/>
                            <p className='previous'>Last Week - {item.timeframes.daily.previous}hrs</p>
                        </div>
                    </div>
                </div>
            ))}     
        </div>
    )
}