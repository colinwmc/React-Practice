import './Testimonial.css'

export default function Testimonial({quote, name, org, imgSrc} : {quote: string, name: string, org: string, imgSrc?: string}){
    return (
        <div className='testimonial-wrapper'>
            <div className='backdrop'>
                <img className='portrait' src={imgSrc} alt="" />
                <div className='quote-box'>
                    <img className='quote-mark' src="src\assets\quote-mark.png" alt="" />
                    <div className='quote'>{quote}</div>
                    <div className='signature'>
                        <div className='name'>{name}</div>
                        <div className='org'>{org}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}