import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../styles/header.module.css"
import scrollToElement from "scroll-to-element"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.container}>
    <div className={headerStyles.links}>
      <p>
        <Link to="/#about" onClick={ e => handleLinkClick(e, '#about')} style={{color: "black", textDecoration: "none"}} activeStyle={{color: "blue", textDecoration: "underline"}} partiallyActive={true}>
          1. About
        </Link>
      </p>
      <p>
        <Link to="/#experience" onClick={ e => handleLinkClick(e, '#experience')} style={{color: "black", textDecoration: "none"}}>
          2. Experience
        </Link>
      </p>
      <p>
        <Link to="/#work" onClick={ e => handleLinkClick(e, '#work')} style={{color: "black", textDecoration: "none"}}>
          3. Work
        </Link>
      </p>
      <p>
        <Link to="/#contact" onClick={ e => handleLinkClick(e, '#contact')} style={{color: "black", textDecoration: "none"}}>
          4. Contact
        </Link>
      </p>
    </div>
  </header>
)

const handleLinkClick = (e, target) => {

  if (typeof window !== 'undefined') {
    if (e) e.preventDefault()
    scrollToElement(target, {
      offset: -95,
      duration: 1000,
    })
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
