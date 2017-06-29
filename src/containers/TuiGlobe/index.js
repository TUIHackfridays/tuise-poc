import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

import 'styles/homepage.scss'


const TuiGLobe = () => <div style={styles.container}>
  <CircularProgress />
    <div className='wereldbol'>
        <div className='mond'><img src="./assets/TUI.svg" /></div>
        <div className='oog'></div>
    </div>
    <div className='schaduw'></div>
</div>

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
