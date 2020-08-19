import { types } from "mobx-state-tree";

export const VacancieItem = types.model({
    id: types.identifierNumber,
    title: types.optional( types.string, "" ),
    description: types.optional( types.string, "" ),
    category: types.optional( types.string, "" ),
    image: types.optional( types.string, "")
})
.actions( self => ({

}))