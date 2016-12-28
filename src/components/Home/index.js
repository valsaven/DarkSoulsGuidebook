import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

// Images
// FIXME: Fix images paths
import Solaire from './images/Icons/Solaire.png';
import Weapons from './images/Icons/Weapons.png';
import Armor from './images/Icons/Armor.png';
import Spells from './images/Icons/Spells.png';
import Items from './images/Icons/Items.png';
import Soapstone from './images/Icons/Soapstone.png';
import Stats from './images/Icons/Stats.png';
import Locations from './images/Icons/Locations.png';

function ContentItems() {
  const contentList = [
    { title: 'CHARACTERS', img: Solaire, alt: 'characters' },
    { title: 'WEAPONS', img: Weapons, alt: 'weapons' },
    { title: 'ARMOR', img: Armor, alt: 'armor' },
    { title: 'MAGIC', img: Spells, alt: 'magic' },
    { title: 'ITEMS', img: Items, alt: 'items' },
    { title: 'ONLINE PLAY', img: Soapstone, alt: 'online' },
    { title: 'STATS', img: Stats, alt: 'stats' },
    { title: 'LOCATIONS', img: Locations, alt: 'locations' }
  ];
  const listItems = contentList.map((item) =>
    <Link to={item.alt}>
      <div className="content-item">
        <img src={item.img} alt={item.alt}/>
        <p>{item.title}</p>
      </div>
    </Link>
  );
  return (
    <div className="container">{listItems}</div>
  );
}

class Home extends Component {
  render() {
    return (
      <ContentItems content/>
    );
  }
}

export default Home;
