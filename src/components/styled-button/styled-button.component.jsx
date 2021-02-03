import React from 'react'

import './styled-button.styles.scss';

const StyledButton = ({children, ...props}) => {
    return (
        <a className="styled-button" href="https://docs.google.com/document/d/e/2PACX-1vRPjKqA_q94biat6eJhqnxOyB6MURLe9Vvjiv_DQm3xaBOU7JChk8ElSsVq4eu6d-9b8UJmpXEfMR3f/pub">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </a>
    )
}

export default StyledButton
