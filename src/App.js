import React from 'react';
import './styles/tailwind.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddPage from './components/AddPage';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Trending from './components/Trending';
import Business from './components/Business';
import Ent from './components/Ent';
import Sports from './components/Sports';
import Music from './components/Music';
import Videos from './components/Videos';
import Movies from './components/Movies';
import Events from './components/Events';
import Head from './components/Head';








function App(){
    return(
      <main>
            <Router>
              <Head/>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/addpage" component={AddPage} />
                    <Route path="/trending" component={Trending} />
                    <Route path="/business" component={Business} />
                    <Route path="/entertainment" component={Ent} />
                    <Route path="/sports" component={Sports} />
                    <Route path="/music" component={Music} />
                    <Route path="/videos" component={Videos} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/events" component={Events} />
                </Switch>
            </Router>
        </main>
    )
}

export default App;