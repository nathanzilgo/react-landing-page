import React from 'react';
import Landing from './landingpage';
import { Switch, Route } from 'react-router-dom';
import About from './about/about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Tech from './technologies';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/technologies' component={Tech}/>
    </Switch>
);

export default Main;