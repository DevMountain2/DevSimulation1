import React from "react";
import { Switch, Route } from "react-router-dom";
//import App from './App.js';
import ShelfContainer from './shelfContainer';
import ShelfA from './shelfA';
import ShelfB from './shelfB';
import ShelfC from './shelfC';
import ShelfD from './shelfD';


export default (
  <Switch>
    <Route component={ ShelfContainer } exact path="/" />
    <Route component={ ShelfA } path="/shelfA" />
    <Route component={ ShelfB } path="/shelfB" />
    <Route component={ ShelfC } path="/shelfC" />
    <Route component={ ShelfD } path="/shelfD" />
  </Switch>
)
