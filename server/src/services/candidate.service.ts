import { getRepository } from 'typeorm';
import Candidate from '../models/candidate.entity';

export let totalCandidatesCount: number = 0;

class CandidateService {
    private candidateService;

    constructor(){
        this.candidateService = getRepository( Candidate );
    }

    public async getAll(){
        try{
            let candidates = await this.candidateService.find();
            totalCandidatesCount = candidates.length;
            return candidates;
        }
        catch( error ){
            return error;
        }
    }

    public async create( data ){
        try{
            let newCandidate = await this.candidateService.save( data );
            return newCandidate;
        }
        catch( error ){
            return error;
        }
    }

    public async delete (id){
        try{
            const deleteResponse = await this.candidateService.delete( id );

            if ( deleteResponse.affected !== 0 ) {
                return ( await this.candidateService.find());
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

export default CandidateService;