
import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const ThemeProvider = (props) => (
  <MuiThemeProvider>
    {props.children}
  </MuiThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.element
}

export default ThemeProvider
