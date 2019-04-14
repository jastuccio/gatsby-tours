import React from "react"
import GlobalStyles from "../../globalStyles"
// import PropTypes from "prop-types"
// import GlobalStyle from "../utils/Global"
import Navbar from "./navBar"
// import Footer from "./globals/Footer"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navbar />
    {children}
    {/* <Footer /> */}
  </>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
