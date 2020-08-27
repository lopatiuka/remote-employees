import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './main.component';
import { Vacancies } from './vacancie/vacancies.component';
import './vacancies.scss';
import { vacanciesStore } from '../stores/vacancie.store';
import { Vacancie } from './vacancie/vacancie.item';
import AdminComponent from './admin/admin.component';


export class RouterComponent extends React.Component{
    constructor( props ){
        super( props );
        vacanciesStore.getAllVacancies();
    }
    render(){
        return <div>
            <Router>
                <Switch>
                    <Route exact path = "/" component = { Main }/>
                    <Route exact path = "/vacancies" component = { Vacancies }/>
                    <Route path = "/vacancies/:id" component = { Vacancie }/>
                    <Route exact path = "/admin" component = { AdminComponent }/>
                </Switch>
            </Router>
        </div>
    }
}