import React from 'react';
import './styles/tailwind.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddPage from './components/AddPage';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import Menu from './components/Menu';
import TrendingPage from './components/TrendingPage';
import BusinessPage from './components/BusinessPage';
import EntPage from './components/EntPage';
import SportsPage from './components/SportsPage';
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
                    <Route path="/trending" component={TrendingPage} />
                    <Route path="/business" component={BusinessPage} />
                    <Route path="/entertainment" component={EntPage} />
                    <Route path="/sports" component={SportsPage} />
                    <Route path="/events" component={Events} />
                </Switch>
            </Router>
        </main>
    )
}

export default App;