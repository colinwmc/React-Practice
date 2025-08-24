import type React from 'react'
import { FaCat } from "react-icons/fa6";
import './Card.css'

export default function Card({icon, iconColor, slotColor, children} : {icon?:React.ReactElement,iconColor?:string, slotColor?:string, children:React.ReactNode}) {
    let iconElement = icon ? icon : <FaCat />;
    return (
        <div className='card'>
            <div className='card-base'>
                <div className='icon-slot' style={{backgroundColor:slotColor, color:iconColor}}>{iconElement}</div>
                <div className='children'>{children}</div>
            </div>
            
        </div>
    )
}