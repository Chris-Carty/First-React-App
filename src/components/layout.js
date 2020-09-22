/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
  
      allContentfulLink {
        edges {
          node {
            title
            url
          }
        }
      } 
    }
  `)

  return (
    <>
      
      <Header/>
        <main>{children}
        </main>
        <Footer data={data}>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:chris-carty@live.com" >Email us</a> to ask anything. © 2018 - <a>Terms of Service</a> - <a>Privacy Policy</a>
        </Footer>
    </>
  )

  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


