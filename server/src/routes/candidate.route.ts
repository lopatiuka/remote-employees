import * as express from 'express';
import authenticationMiddleware from '../middlewares/authentication.middleware';
import CandidateController from '../controllers/candidate.controller';

class CandidateRoute{
  public path = '/candidates';
  public router = express.Router();
  public controller = new CandidateController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.get( this.path, this.controller.getAll );
    this.router.post( this.path, this.controller.create );
    this.router.delete(`${ this.path }/:id`, authenticationMiddleware(), this.controller.delete );
  }
}

export default CandidateRoute;