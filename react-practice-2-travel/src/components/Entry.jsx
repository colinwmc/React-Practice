export default function Entry() {
    return (
        <div className="entry-wrapper">
            <img className="entry-img" src="src\assets\Fuji-img.png" alt="fuji image" />
            <div className="entry-info">
                <div className="entry-line-1">
                    <img className="marker-icon" src="src\assets\Marker.png" alt="marker-icon" />
                    <span className="entry-location">JAPAN</span>
                    <a className="link" href="http://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <h2 className="entry-title">Mount Fuji</h2>
                <h3 className="date-span">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}