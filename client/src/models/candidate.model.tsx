import { types } from "mobx-state-tree";

export const CandidateItem = types.model({
    fullName: types.optional( types.string, "asd" ),
    telephone: types.optional( types.string, "123" ),
    email: types.optional( types.string, "asd" ),
    vacancie: types.optional( types.string, "asd" ),
    cvLink: types.optional( types.string, "asd" ),
    testTaskLink: types.optional( types.string, "asd" ),
    howKnow: types.optional( types.string, "asd" ),
    message: types.optional( types.string, "" )
})
.actions( self => ({
    setName( newFullName ){
        self.fullName = newFullName;
        console.log(self.fullName);
    },

    setTelephone( newTelephone ){
        self.telephone = newTelephone;
    },

    setEmail( newEmail ){
        self.email = newEmail;
    },

    setVacancie( newVacancie ){
        self.vacancie = newVacancie;
        console.log(self.vacancie);
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