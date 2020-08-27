import { types } from "mobx-state-tree";

export const VacancieItem = types.model({
    id: types.identifierNumber,
    title: types.optional( types.string, "" ),
    description: types.optional( types.string, "" ),
    category: types.optional( types.string, "Web development" ),
    imagePath: types.optional( types.string, "" )
})
.volatile(() => ({
    image: null
  }))
.actions( self => ({
    setTitle( newTitle ){
        self.title = newTitle;
    },
    
    setDescription( newDescription ){
        self.description = newDescription;
    },

    setCategory( newCategory ){
        self.category = newCategory;
    },

    setImage( file ) {
        self.image = file;
    },

    setDefaultValues(){
        self.title = "";
        self.description = "";
        self.category = "Web development";
    }
}))