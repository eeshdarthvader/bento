import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../sass/index.scss'

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <title>Bento - Cleartrip Design System</title>
      <meta name="description" content="Resources, tooling, and design guidelines for building interfaces with Cleartrip’s design system" />
      <html lang='en' />
    </Helmet>
    <div>
      {children}
    </div>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
