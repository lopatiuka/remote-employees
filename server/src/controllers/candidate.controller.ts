import * as express from 'express';
import CandidateSerice, { totalCandidatesCount } from '../services/candidate.service';

class CandidateController {
    private service: CandidateSerice = new CandidateSerice();

    public getAll = async( request: express.Request, response: express.Response ) => {
        let candidates = await this.service.getAll();
        response.header("X-Total-Count", `${ totalCandidatesCount }`).send( candidates );
    }

    public create = async( request: express.Request, response: express.Response ) => {
        let newCandidate = await this.service.create( request.body );
        response.send( newCandidate );
    }

    public delete = async( request: express.Request, response: express.Response ) => {
        let deletedCandidate = await this.service.delete( request.params.id );
        response.send( deletedCandidate );
    }
}

export default CandidateController;