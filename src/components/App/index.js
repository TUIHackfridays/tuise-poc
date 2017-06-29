
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authLogin } from 'containers/Auth/actions'
import ThemeProvider from 'components/ThemeProvider'
import Tabs from 'material-ui/Tabs';

import routes from './routes'

class App extends Component {
  componentWillMount () {
    const { auth } = this.props
    if (auth.token != null) {
      this.props.userAuthLogin(auth.authToken)
    }
  }

  render () {
    return (
      <ThemeProvider>
        <div style={styles.container}>
          <Tabs></Tabs>
          {routes()}
        </div>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  userAuthLogin: PropTypes.func.isRequired
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100%'
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = (dispatch) => ({
  userAuthLogin: (token) => dispatch(authLogin(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
