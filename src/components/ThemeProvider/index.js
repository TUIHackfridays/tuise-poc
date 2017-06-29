
import React from 'react'
import PropTypes from 'prop-types'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const darkMuiTheme = getMuiTheme(darkBaseTheme);

const ThemeProvider = (props) => (
  <MuiThemeProvider muiTheme={darkMuiTheme}>
    {props.children}
  </MuiThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.element
}

export default ThemeProvider
