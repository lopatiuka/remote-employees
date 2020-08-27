import { getRepository } from 'typeorm';
import Vacancie from '../models/vacancie.entity';
import FileReader from 'filereader';

export let totalVacanciesCount: number;

class VacancieService {
    private vacancieRepository;

    constructor(){
        this.vacancieRepository = getRepository( Vacancie );
    }

    public async getAll(){
        try{
            let vacancies = await this.vacancieRepository.find();
            totalVacanciesCount = vacancies.length;
            return vacancies;
        }
        catch( error ){
            return error;
        }
    }

    public async create( data, file ){
        try{
            const vacancie = {
                title: data.title,
                description: data.description,
                category: data.category,
                imagePath:  file.path
            }
            
            let newVacancie = await this.vacancieRepository.save( vacancie );
            return newVacancie;
        }
        catch( error ){
            console.log(error);

            return error;
        }
    }

    public async getById( id ){
        try{
            let vacancie = await this.vacancieRepository.findOne( id );
            return vacancie;
        }
        catch( error ){
            return error;
        }
    }

    public async edit ( id, data, file ){
        try{
            const newVacancie = {
                title: data.title,
                description: data.description,
                category: data.category,
                imagePath: file.path
            }
            
            await this.vacancieRepository.update( id, newVacancie );
            const updatedVacancie = await this.vacancieRepository.findOne( id );
            if ( updatedVacancie ) {
            return( updatedVacancie );
            } else {
                return("Not Found " + id);
            }
        }
        catch( error ){
            return error;
        }
    }

    public async delete (id){
        try{
            const deleteResponse = await this.vacancieRepository.delete( id );

            if ( deleteResponse.affected !== 0 ) {
                return ( await this.vacancieRepository.find());
            } 
            else{
                return("Not Found " + id);
            }
        }
        catch( error ){
            return error;
        }
    }
}

export default VacancieService;