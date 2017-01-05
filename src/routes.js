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

// Magic
import Miracles from './components/Magic/components/Miracles';
import Pyromancy from './components/Magic/components/Pyromancy';
import Sorcery from './components/Magic/components/Sorcery';

import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="characters" component={Characters}/>
    <Route path="weapons" component={Weapons}/>
    <Route path="armor" component={Armor}/>
    <Route path="magic" component={Magic}/>
    <Route path="magic/miracles" component={Miracles}/>
    <Route path="magic/pyromancy" component={Pyromancy}/>
    <Route path="magic/sorcery" component={Sorcery}/>
    <Route path="items" component={Items}/>
    <Route path="online" component={Online}/>
    <Route path="stats" component={Stats}/>
    <Route path="locations" component={Locations}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
