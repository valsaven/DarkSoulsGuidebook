import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import Characters from './components/Characters';
import Weapons from './components/Weapons';
import Armor from './components/Armor';
import Magic from './components/Magic';
import Items from './components/Items';
import Online from './components/Online';
import Stats from './components/Stats';
import Locations from './components/Locations';

import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={App}/>
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
