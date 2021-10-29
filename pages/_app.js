import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../public/dark.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any
}

export default MyApp
