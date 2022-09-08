export default function MainCard(){
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
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </nav>
        </section>
    )
}