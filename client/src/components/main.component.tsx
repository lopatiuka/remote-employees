import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from './shares/footer';
import { CandidateForm } from './shares/candidate-form';
import { TopNavigation } from './shares/top-navigation';

export class Main extends React.Component{
    render(){
        return <div>
            <TopNavigation/>
            <section className = "main">
                <div>
                    <p>REMOTE STAFF<br/><span>NEEDED</span></p>
                </div>
                <p>Компании 2 года.<br/>
                    100+ сотрудников.<br/>
                    40+ международных проектов.<br/>
                    Первая сотрудница все еще работает у нас.<br/>
                    Первые клиенты все еще работают с нами.<br/>
                    <span>Наши сотрудники работают из 6 городов Украины</span></p>
                    <NavLink className = "link" to = "/vacancies">Посмотреть вакансии</NavLink>
            </section>
            <section className = "how">
                <h1>Как получить работу?</h1>
            </section>
            <section className = "advantages">
                <h1>ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <section className = "areas-we-work">
                <h1>В каких сферах мы работаем</h1>
                <p>Выбери подходящее для себя направление и начни работать уже завтра!</p>
            </section>
            <section className = "about-us">
                <h1>ЕЩЁ НЕМНОГО О НАС</h1>
            </section>
            <section className = "join">
                <h1>ГОТОВ ПРИСОЕДИНИТЬСЯ?</h1>
                <CandidateForm/>
            </section>
            <Footer/>
        </div>
    }
}