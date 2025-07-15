export default function Entry(props) {
    return (
        <div className="entry-wrapper">
            <img className="entry-img" src={props.img.src} alt={props.img.alt} />
            <div className="entry-info">
                <div className="entry-line-1">
                    <img className="marker-icon" src="src\assets\Marker.png" alt="marker-icon" />
                    <span className="entry-location">{props.country}</span>
                    <a className="link" href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.title}</h2>
                <h3 className="date-span">{props.dates}</h3>
                <p className="description">{props.text}</p>
            </div>
        </div>
    )
}