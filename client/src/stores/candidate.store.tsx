import { types, unprotect } from 'mobx-state-tree';
import { CandidateItem } from '../models/candidate.model';

const CandidateList = types.model({
    candidates: types.array( CandidateItem )
})
.actions( self => ({
    async create( nameInput, phoneInput, emailInput, vacancieInput, cvLinkInput,
    testTaskLinkInput, howKnowInput, messageInput ){
        const body = {
            name: nameInput,
            phone: phoneInput,
            email: emailInput,
            vacancie: vacancieInput,
            cvLink: cvLinkInput,
            testTaskLink: testTaskLinkInput,
            howKnow: howKnowInput,
            message: messageInput
        }
    }
}))

export const candidateModel = CandidateItem.create({});