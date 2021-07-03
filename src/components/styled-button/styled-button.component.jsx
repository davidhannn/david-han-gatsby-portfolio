import React from "react"

import "./styled-button.styles.scss"

const StyledButton = ({ children, ...props }) => {
  return (
    <a
      className="styled-button"
      href="https://docs.google.com/document/d/e/2PACX-1vSZ4C_PjNU3_0R7x4tKqA6db4ZniHyaMvORKhVxUjKfOqaqRNYdWbCRJwmyAS24kcIjrcW5gTZNsd0F/pub"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  )
}

export default StyledButton
