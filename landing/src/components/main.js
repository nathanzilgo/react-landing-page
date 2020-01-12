import React from 'react';
import Landing from './landingpage';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);

export default Main;