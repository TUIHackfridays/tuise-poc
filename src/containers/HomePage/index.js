import React from 'react'
import Tab from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';

import 'styles/homepage.scss'


const HomePage = () => <div style={styles.container}>
  <CircularProgress />
    <div className='wereldbol'>
        <div className='mond'><img src="./assets/TUI.svg" /></div>
        <div className='oog'></div>
    </div>
    <div className='schaduw'></div>
</div>

/*<div>
  <Tab label="Item One" >
    Home
    <CircularProgress />
  </Tab>
</div>*/

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default HomePage
