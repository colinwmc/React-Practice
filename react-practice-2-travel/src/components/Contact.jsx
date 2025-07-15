function Contact({img, alt, name, phoneNumber, email}) {
    return (
       <article className="contact-card">
                <img 
                    src={img}
                    alt={alt}
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="./images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{phoneNumber}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
    )
}

export default Contact