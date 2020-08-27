import axios from 'axios';

export class VacancieService{

    private path = "http://localhost:5000/vacancies";
    private token = localStorage.getItem( 'token' );


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
            let vacancie = await axios.post( this.path, body, {
                headers: {
                    'Authorization': `Bearer ${ this.token }`,
                    'Content-Type' : 'application/json; multipart/form-data'
                }
            } );
            return vacancie.data;
        }
        catch( error ){
            debugger;
            return error;
        }
    }

    public async edit( id, body ){
        try{
            let vacancie = await axios.put( `${ this.path }/${ id }`, body, {
                headers: {
                    'Authorization': `Bearer ${ this.token }`,
                    'Content-Type' : 'application/json; multipart/form-data'
                }
            } );
            return vacancie.data
        }
        catch( error ){
            return error;
        }
    }

    public async delete( id ){
        try{
            let deletedVacancie = await axios.delete( `${ this.path }/:${ id }` );
            return deletedVacancie.data;
        }
        catch( error ){
            return error;
        }
    }
}