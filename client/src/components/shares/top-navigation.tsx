import React from "react";
import { NavLink } from 'react-router-dom';

export class TopNavigation extends React.Component{
    render(){
        return  <div className = "top">
            <div className = "navigation">
                <NavLink exact to = "/" className = "link" activeClassName = "activeLink">Main</NavLink>
                <NavLink to = "/vacancies" className = "link" activeClassName = "activeLink">Vacancies</NavLink>
            </div>
        </div>
    }
}