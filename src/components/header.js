import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkWrapper = styled.div``

const HeaderLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `seagreen`,
      marginBottom: `1.45rem`,
    }}
  >
    <ContentWrapper
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <LinkWrapper>
        <HeaderLink to="/list-of-posts/">Posts</HeaderLink>
      </LinkWrapper>
    </ContentWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
