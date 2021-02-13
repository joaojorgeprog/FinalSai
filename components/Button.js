import React from 'react'
import stylesButton from '../styles/Button.module.css'

const STYLES = [
    'btn__primary',
    'btn__outline'
]

const SIZES = [
    'btn__medim',
    'btn__large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <button className={`btnNav ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}