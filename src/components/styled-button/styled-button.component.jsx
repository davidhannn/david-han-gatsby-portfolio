import React from "react"

import "./styled-button.styles.scss"

const StyledButton = ({ children, ...props }) => {
  return (
    <a
      className="styled-button"
      href="https://docs.google.com/document/d/1SFjQqZq9CCjKLTCRjkzU3Qo_JfgSXsrKeMPuzqhiADw/export?format=pdf"
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
