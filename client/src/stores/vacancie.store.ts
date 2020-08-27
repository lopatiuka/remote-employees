import { types, unprotect } from 'mobx-state-tree';
import { VacancieItem } from '../models/vacancie.model';
import { VacancieService } from '../services/api-services/vacancie.services';

const service: VacancieService = new VacancieService();

export const vacancieModel = VacancieItem.create({ 
    id: 0
});

const VacancieList = types.model({
    vacancies: types.array( VacancieItem ),
    category: types.optional( types.string, "" )
})
.actions( self => ({
    async getAllVacancies(){
        let result = await service.getAll();
        result.message ? alert( "Что-то не так, перезагрузите сайт" ) : self.vacancies = result;
    },

    async createVacancie( e, inputTitle, inputDescription, inputCategory, inputFile ){
        e.preventDefault();

        let data = new window.FormData();
        data.append("title", inputTitle);
        data.append("description", inputDescription);
        data.append("category", inputCategory);
        data.append("image", inputFile);

        let result = await service.create( data );
        result.title ? alert( "Запись успешно добавлена" ) : alert( "Ошибка, попробуйте ещё" );

        vacancieModel.setDefaultValues();
    },

    async editVacancie( e, vacancieId, inputTitle, inputDescription, inputCategory, inputFile ){
        e.preventDefault();

        let data = new window.FormData();
        data.append("title", inputTitle);
        data.append("description", inputDescription);
        data.append("category", inputCategory);
        data.append("image", inputFile);

        let result = await service.edit( vacancieId, data );
        result.title ? alert( "Запись успешно изменена" ) : alert( "Ошибка, попробуйте ещё" );

        vacancieModel.setDefaultValues();
    }
}))
.views( self => ({
    vacanciesFilter( e, category, items, activeClass ){
        self.category = category;
        for( let i = 0; i < items.length; i++ )
        {
            if( items[i].innerText === e.target.innerText )
            items[i].classList.add( activeClass );
            else
            items[i].classList.remove( activeClass );   
        }
    }
}))

export const vacanciesStore = VacancieList.create({});
unprotect( vacanciesStore );