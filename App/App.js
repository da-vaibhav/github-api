import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import About from './About';
import Home from './Home';
import Repos from './Repos';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
        </menu>
        {this.props.children}
      </div>
    );
  }
}

render((<Router>
  <Route path='/' component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path='about' component={About}></Route>
    <Route path='repos' component={Repos}></Route>
  </Route>
</Router>), document.querySelector('#root'));
