import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import WebDev from './WebDev.jsx';
import MicrocontrollersDev from './MicrocontrollersDev.jsx';
import NeuroDev from './NeuroDev.jsx';
import MobileDev from './MobileDev.jsx';
import Account from './Account.jsx';
import Contacts from './Contacts.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';
import SignIn from "./SignIn.jsx";

class MainApp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/web' component={WebDev}/>
                    <Route path='/microcontrollers' component={MicrocontrollersDev}/>
                    <Route path='/mobile' component={MobileDev}/>
                    <Route path='/neuro' component={NeuroDev}/>
                    <Route path='/login' component={SignIn}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/about' component={About}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}
module.exports = MainApp;