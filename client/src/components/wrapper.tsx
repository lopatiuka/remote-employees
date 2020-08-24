import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Main } from './main';
import { Vacancies } from './vacancies';
import './vacancies.scss';
import { vacanciesStore } from '../stores/vacancie.store';
import { Vacancie } from './vacancie.item';


export class Wrapper extends React.Component{
    constructor( props ){
        super( props );
        vacanciesStore.getAllVacancies();
    }
    render(){
        return <div>
            <Router>
           <div className = "top">
                <div className = "navigation">
                    <NavLink exact to = "/" className = "link" activeClassName = "activeLink">Main</NavLink>
                    <NavLink to = "/vacancies" className = "link" activeClassName = "activeLink">Vacancies</NavLink>
                </div>
            </div>
            <Switch>
                <Route exact path = "/" component = { Main }/>
                <Route exact path = "/vacancies" component = { Vacancies }/>
                <Route path = "/vacancies/:id" component = { Vacancie }/>
        </Switch>
        </Router>
    </div>
    }
}