import React from 'react';
import AddPage from './AddPage';
import Menu from './Menu';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Trending from './Trending';
import Business from './Business';
import Ent from './Ent';
import Sports from './Sports';
import Music from './Music';
import Videos from './Videos';
import Movies from './Movies';
import Events from './Events';


function Navbar(){
    return(
        <main>
            <Router>
                <Menu/>
                <Switch>
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
    );
}

export default Navbar;