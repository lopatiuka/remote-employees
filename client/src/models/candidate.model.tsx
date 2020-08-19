import { types } from "mobx-state-tree";

export const CandidateItem = types.model({
    name: types.optional( types.string, "" ),
    telephone: types.optional( types.string, "" ),
    email: types.optional( types.string, "" ),
    vacancie: types.optional( types.string, "" ),
    cvLink: types.optional( types.string, "" ),
    testTaskLink: types.optional( types.string, "" ),
    howKnow: types.optional( types.string, "" ),
    message: types.optional( types.string, "" )
})
.actions( self => ({
    setName( newName ){
        self.name = newName;
    },

    setTelephone( newTelephone ){
        self.telephone = newTelephone;
    },

    setEmail( newEmail ){
        self.email = newEmail;
    },

    setVacancie( newVacancie ){
        self.vacancie = newVacancie;
    },

    setCvLink( newCvLink ){
        self.cvLink = newCvLink;
    },

    setTestTaskLink( newTestTaskLink ){
        self.testTaskLink = newTestTaskLink;
    },

    setHowKnow( newHowKnow ){
        self.howKnow = newHowKnow;
    },

    setMessage( newMessage ){
        self.message = newMessage;
    }
}));