import React from 'react';
import { vacanciesStore } from '../../stores/vacancie.store';
import { CandidateForm } from '../shares/candidate-form';
import { observer } from 'mobx-react';
import { Footer } from '../shares/footer';
import { TopNavigation } from '../shares/top-navigation';

interface IProps{
    match?: any;
}

@observer
export class Vacancie extends React.Component<IProps,{}>{
    render(){
        const vacancieId = this.props.match.params.id;
        let vacancie;
        for( let i = 0; i < vacanciesStore.vacancies.length; i++ ){
            if( vacanciesStore.vacancies[i].id.toString() === vacancieId ){
                vacancie = vacanciesStore.vacancies[i];
                break;
            }
        }
        if( vacancie === undefined)
            return <h2>Вакансия не найдена</h2>;
        else
            return <div className = "vacancie-window">
                <TopNavigation/>
                <div className = "vacancie-title">
                    <h1>{ vacancie.title }</h1>
                        <p>В команду Remote Employees требуется { vacancie.title } для работы на иностранных проектах</p>
                </div>
                <CandidateForm/>
                <Footer/>
            </div>;
    }
}
