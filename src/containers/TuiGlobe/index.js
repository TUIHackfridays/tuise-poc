import React, { Component } from 'react'

import 'styles/homepage.scss'

class TuiGLobe extends Component {
  constructor(props) {
     super(props);
     this.state = {
       clss: 'wereldbol'
     }
   }

  render () {
    return (
      <div style={styles.container}>
        <div className={this.state.clss}>
            <div className='mond'><img src="./assets/TUI.svg" /></div>
            <div className='oog'></div>
        </div>
        <div className='schaduw'></div>
      </div>
    )
  }

  componentDidMount() {

    this.wink()
  }

  wink() {

    this.setState({'clss': 'wereldbol wink'});

    setTimeout(function () {
        this.setState({'clss': 'wereldbol'});
    }.bind(this), 1000)

    setTimeout(function () {
        this.wink()
    }.bind(this), Math.random() * 20000)
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  }
}

export default TuiGLobe
