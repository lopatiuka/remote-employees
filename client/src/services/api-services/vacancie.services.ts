import axios from 'axios';

export class VacancieService{

    private path = "http://localhost:5000/vacancies";

    public async getAll(){
        try{
            let vacancies = await axios.get( this.path );
            return vacancies.data;
        }
        catch( error ){
            return error;
        }
    }

    public async getById( id ){
        try{
            let vacancies = await axios.get( `${ this.path }/:${ id }` );
            return vacancies.data;
        }
        catch( error ){
            return error;
        }
    }

    public async create( body ){
        try{
            let vacancie = await axios.get( this.path, body );
            return vacancie.data;
        }
        catch( error ){
            return error;
        }
    }

    public async edit( id, body ){
        try{
            let editedVacancie = await axios.get( `${ this.path }/:${ id }`, body );
            return editedVacancie.data;
        }
        catch( error ){
            return error;
        }
    }

    public async delete( id ){
        try{
            let deletedVacancie = await axios.get( `${ this.path }/:${ id }` );
            return deletedVacancie.data;
        }
        catch( error ){
            return error;
        }
    }
}