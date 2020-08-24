import { types } from 'mobx-state-tree';
import { CandidateItem } from '../models/candidate.model';
import { CandidateService } from "../services/api-services/candidate.service";

const service: CandidateService = new CandidateService();

const CandidateList = types.model({
    candidates: types.array( CandidateItem )
})
.actions( self => ({
    async create( e, nameInput, phoneInput, emailInput, vacancieInput, cvLinkInput,
    testTaskLinkInput, howKnowInput, messageInput ){
        e.preventDefault();

        const body = {
            fullName: nameInput,
            telephone: phoneInput,
            email: emailInput,
            vacancie: vacancieInput,
            cvLink: cvLinkInput,
            testTaskLink: testTaskLinkInput,
            howKnow: howKnowInput,
            message: messageInput
        }
        let result = await service.create( body );
        debugger;
        result.fullName ? alert("Спасибо, мы с вами свяжемся в ближайшее время") : alert( "Что-то не так, попробуйте ещё раз" );
    }
}))

export const candidateStore = CandidateList.create({});
export const candidateModel = CandidateItem.create({});