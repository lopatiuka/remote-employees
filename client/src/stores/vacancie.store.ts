import { types, unprotect } from 'mobx-state-tree';
import { VacancieItem } from '../models/vacancie.model';
import { VacancieService } from '../services/api-services/vacancie.services';

const service: VacancieService = new VacancieService();

const VacancieList = types.model({
    vacancies: types.array( VacancieItem ),
    category: types.optional( types.string, "" )
})
.actions( self => ({
    async getAllVacancies(){
        let result = await service.getAll();
        if( result ){
            self.vacancies = result;
        }
    },
    
    vacanciesFilter( e, category, items, activeClass ){
        self.category = category;
        for( let i = 0; i < items.length; i++ )
        {
            if( items[i].innerText == e.target.innerText )
            items[i].classList.add( activeClass );
            else
            items[i].classList.remove( activeClass );
            
        }
    }
}))

export const vacanciesStore = VacancieList.create({});
unprotect( vacanciesStore );