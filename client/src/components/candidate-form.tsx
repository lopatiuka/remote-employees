import React from "react";
import { candidateModel, candidateStore } from "../stores/candidate.store";
import { observer } from "mobx-react";

@observer
export class CandidateForm extends React.Component{
    render(){
        return <div className = "candidate-form">
            <h2>Откликнуться на вакансию</h2>
            <p>заполните форму для подачи заявки</p>
            <form className = "candidate-form">
                <div>
                    <input type = "text" placeholder = "ФИО" value = { candidateModel.fullName }
                    onChange = { e => candidateModel.setName( e.target.value )}/>

                    <input type = "phone" placeholder = "Телефон" value = { candidateModel.telephone } 
                    onChange = { e => candidateModel.setTelephone( e.target.value )}/>
                </div>
                <input type = "email" placeholder = "Email" value = { candidateModel.email }
                onChange = { e => candidateModel.setEmail( e.target.value )}/>

                <select value = { candidateModel.vacancie }
                onChange = { e => candidateModel.setVacancie( e.target.value )}>
                    <option>Angular Developer</option>
                    <option>Designer</option>
                    <option>Marketologist</option>
                    <option>Frontend Developer</option>
                </select>

                <input type = "text" placeholder = "Ссылка на резюме" value = { candidateModel.cvLink }
                onChange = { e => candidateModel.setCvLink( e.target.value )}/>

                <input type = "text" placeholder = "Ссылка на тестовое задание" value = { candidateModel.testTaskLink }
                onChange = { e => candidateModel.setTestTaskLink( e.target.value )}/>

                <input type = "text" placeholder = "Как вы о нас узнали?" value = { candidateModel.howKnow }
                onChange = { e => candidateModel.setHowKnow( e.target.value )}/>

                <input type = "text" placeholder = "Оставьте сообщение" value = { candidateModel.message }
                onChange = { e => candidateModel.setMessage( e.target.value )}/>

                <input type = "submit" value = "ОТПРАВИТЬ" className = "send-button"
                 onClick = { e => candidateStore.create( e, candidateModel.fullName, candidateModel.telephone, candidateModel.email,candidateModel.vacancie, 
                 candidateModel.cvLink,candidateModel.testTaskLink, candidateModel.howKnow, candidateModel.message ) }/>
            </form>
        </div>
    }
}