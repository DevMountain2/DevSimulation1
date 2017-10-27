import React, {Component} from 'react';
import './nav.css';



class Nav extends Component{
  render(){
    return(
      <div id='nav'>
        <h1>SHELFIE</h1>
        <img src={'../public/assets/logo.png'}/>
      </div>
    )
  }
}

export default Nav;
