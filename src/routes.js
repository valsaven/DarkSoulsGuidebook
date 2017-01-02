import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Armor from './components/Armor';
import Characters from './components/Characters';
import Home from './components/Home';
import Items from './components/Items';
import Locations from './components/Locations';
import Magic from './components/Magic';
import Online from './components/Online';
import Stats from './components/Stats';
import Weapons from './components/Weapons';

import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="characters" component={Characters}/>
    <Route path="weapons" component={Weapons}/>
    <Route path="armor" component={Armor}/>
    <Route path="magic" component={Magic}/>
    <Route path="items" component={Items}/>
    <Route path="online" component={Online}/>
    <Route path="stats" component={Stats}/>
    <Route path="locations" component={Locations}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
