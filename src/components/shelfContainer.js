import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import router from './router.js';
import ShelfA from './shelfA';
import ShelfB from './shelfB';
import ShelfC from './shelfC';
import ShelfD from './shelfD';


class ShelfContainer extends Component{
  render(){
    return(
      <div>
        HOMEPAGE
        <Link to='shelfA'>
          <ShelfA />
        </Link>
        <Link to='/shelfB'>
          <ShelfB />
        </Link>
        <Link to ='/shelfC'>
          <ShelfC />
        </Link>
        <Link to='/shelfD'>
        <ShelfD />
        </Link>
      </div>
    )
  }
}
export default ShelfContainer;
