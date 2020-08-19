import { getRepository } from 'typeorm';
import Vacancie from '../models/vacancie.entity';

class VacanciesService {
    private vacancieRepository;

    constructor(){
        this.vacancieRepository = getRepository( Vacancie );
    }

    public async getAll(){
        try{
            let vacancies = await this.vacancieRepository.find();
            return vacancies;
        }
        catch( error ){
            return error;
        }
    }

    public async create( data ){
        try{
            let newVacancie = await this.vacancieRepository.save( data );
            return newVacancie;
        }
        catch( error ){
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

    public async edit ( id, body ){
        try{
            await this.vacancieRepository.update( id, body );
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

export default VacanciesService;