import { Link } from "react-router-dom";

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
                    <li><Link to="/daily">Daily</Link></li>
                    <li><Link to="/weekly">Weekly</Link></li>
                    <li><Link to="/monthly">Monthly</Link></li>
                </ul>
            </nav>
        </section>
    )
}