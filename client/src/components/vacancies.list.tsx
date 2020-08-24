import React from 'react';
import { observer } from 'mobx-react';
import { vacanciesStore } from '../stores/vacancie.store';
import { NavLink } from 'react-router-dom';

@observer
export class VacanciesList extends React.Component{
    componentWillUnmount(){
        vacanciesStore.category = "";
    }
    render(){
        return <div className = "conteiner">
                <ul className = "vacancies-filter">
                    <li onClick = { e => vacanciesStore.vacanciesFilter( e, "", document.querySelectorAll(".vacancies-filter>li"), "activeFilter")}>All</li>
                    <li onClick = { e => vacanciesStore.vacanciesFilter( e, "design", document.querySelectorAll(".vacancies-filter>li"), "activeFilter")}>Design</li>
                    <li onClick = { e => vacanciesStore.vacanciesFilter( e, "marketing", document.querySelectorAll(".vacancies-filter>li"), "activeFilter")}>Marketing</li>
                    <li onClick = { e => vacanciesStore.vacanciesFilter( e, "web development", document.querySelectorAll(".vacancies-filter>li"), "activeFilter")}>Web development</li>
                </ul>
            <div className = "vacancies-block">
                <ul className = "vacancies">
                    { vacanciesStore.vacancies.map( vacancie => {
                        if( vacanciesStore.category === "" ){
                            return <li key = { vacancie.id }><p className = "content">{ vacancie.title }</p>
                            <NavLink to = {`/vacancies/${ vacancie.id }`} className = "link">Подробнее</NavLink></li>
                        }
                        else{
                            return vacancie.category.toLowerCase() === vacanciesStore.category ? 
                            <li key = { vacancie.id }><p className = "content">{ vacancie.title }</p>
                            <NavLink to = {`/vacancies/${ vacancie.id }`} className = "link">Подробнее</NavLink></li> : null
                        }
                        
                    })}
                </ul>
            </div>
        </div>
    }
}