import React from 'react'
import './Badge.css';

export default function Badge({style, children, color}:{style:string, children:React.ReactNode, color?:string }){
    const colorArray = [
        'gray',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink'
    ];
    let colorStyle = color ? color : colorArray[Math.floor(Math.random()*colorArray.length)];
    return(
        <div className={`badge ${style} ${colorStyle}`}>{children}</div>
    )
}