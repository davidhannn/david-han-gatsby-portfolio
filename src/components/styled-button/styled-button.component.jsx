import React from 'react'

import './styled-button.styles.scss';

const StyledButton = ({children, ...props}) => {
    return (
        <a className="styled-button" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </a>
    )
}

export default StyledButton
