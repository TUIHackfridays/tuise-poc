
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authLogin } from 'containers/Auth/actions'
import ThemeProvider from 'components/ThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs'
import injectTapEventPlugin from 'react-tap-event-plugin'
import VoiceOverIcon from 'material-ui/svg-icons/action/record-voice-over'
import HomeIcon from 'material-ui/svg-icons/action/home'
import LocationIcon from 'material-ui/svg-icons/communication/location-on'
import TuiGlobe from '../TuiGlobe'
import HomePage from '../HomePage'
import Location from '../Location'
import LiveHelp from '../LiveHelp'

injectTapEventPlugin();

class TabsWrapper extends Component {
  componentWillMount () {
    const { auth } = this.props
    if (auth.token != null) {
      this.props.userAuthLogin(auth.authToken)
    }
  }

  render () {
    return (
      <ThemeProvider>
        <div>
          <Tabs>
            <Tab icon={<VoiceOverIcon />} >
              <div>
                <TuiGlobe />
                <LiveHelp />
              </div>
            </Tab>
            <Tab icon={<HomeIcon />} >
              <div>
                <TuiGlobe />
                <HomePage />
              </div>
            </Tab>
            <Tab icon={<LocationIcon />} >
              <div>
                <TuiGlobe />
                <Location />
              </div>
            </Tab>
          </Tabs>
        </div>
      </ThemeProvider>
    )
  }
}

TabsWrapper.propTypes = {
  auth: PropTypes.object.isRequired,
  userAuthLogin: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = (dispatch) => ({
  userAuthLogin: (token) => dispatch(authLogin(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(TabsWrapper)
