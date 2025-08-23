import React from "react";
import { FaCircleCheck, FaCircleXmark, FaCircleInfo, FaTriangleExclamation } from "react-icons/fa6";

interface BannerProps {
    title: string;
    text?: string;
    style: string;
}

export default function Banner({ title, text, style }: BannerProps) {
    let icon;
    if (style === 'success') {
        icon = <FaCircleCheck className="icon" color="#34D399" />
    } else if (style === 'warning') {
        icon = <FaTriangleExclamation className="icon" color="#FBBF24" />
    } else if (style === 'error') {
        icon = <FaCircleXmark className="icon" color="#F87171" />
    } else if (style === 'info') {
        icon = <FaCircleInfo className="icon" color="#60A5FA" />
    }
    return (
        <div className={`banner ${style}`}>
            <span className="topline">
                {icon}
                <p className={`title ${style}`}>{title}</p>
            </span>
            {text && <p className={`text ${style}`}>{text}</p>}
        </div>
    )
}