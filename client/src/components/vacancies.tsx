import React from 'react';
import { VacanciesList } from './vacancies.list';
import './vacancies.scss'
import { Footer } from './footer';

export class Vacancies extends React.Component{
    render(){
        return <div>
            <div className = "info">
                <h1>Актуальные вакансии</h1>
                <p>В данном разделе представлены актуальные вакансии.
                Для более детального подбора, в соответствии с вашими навыками и интересующими направлениями,
                вы можете воспользоваться фильтром.</p>
            </div>
            <VacanciesList/>
            <Footer/>
        </div>
    }
}