import axios from 'axios';

export class CandidateService{

    private path = "http://localhost:5000/candidates";

    public async create( body ){
        try{
            let candidate = await axios.post( this.path, body );
            return candidate.data;
        }
        catch( error ){
            return error;
        }
    }
}