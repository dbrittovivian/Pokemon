/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { TrainersHome } from '../TrainersHome';
import logo from '../../images/pokemon.png';

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ marginTop: '-12px', marginBottom: '5px' }}
            />
          </Link>
          <h1
            className="App-title"
            style={{ textShadow: '2px 2px #000000', paddingBottom: '5px' }}
          >
            Welcome to the Pokemon World
          </h1>
          <Link
            to="/trainers"
            className="showlink"
            style={{ marginRight: '10px' }}
          >
            Pokémon Trainers
          </Link>

          <Link
            to="/pokemon/page/0"
            className="showlink"
            style={{ marginRight: '10px' }}
          >
            Pokémon
          </Link>
        </header>

        <br />
        <br />
        <div className="App-body">
          <Switch>
            {/* <Route
              path="/pokemon/page/:id"
              component={withRouter(PokemonList)} */}
            {/* /> */}
            {/* <Route path="/pokemon/:id" component={withRouter(Pokemon)} /> */}
            <Route path="/" element={<TrainersHome />} />
            {/* <Redirect from="/" to="trainers" /> */}
          </Switch>
        </div>
        <footer
          className="App-footer"
          style={{ color: 'white', marginTop: '5px' }}
        >
          <div className="copyright">
            <p>2021 © All rights reserved | Vivian Dbritto</p>{' '}
          </div>{' '}
        </footer>
      </div>
    </div>
  );
}
