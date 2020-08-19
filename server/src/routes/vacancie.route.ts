import * as express from 'express';
import VacanciesController from '../controllers/vacancie.controller';

class VacanciesRoute{
  public path = '/vacancies';
  public router = express.Router();
  public controller = new VacanciesController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.get( this.path, this.controller.getAll );
    this.router.get( `${ this.path }/:id`, this.controller.getById )
    this.router.post( this.path, this.controller.create );
    this.router.patch(`${ this.path }/:id`, this.controller.edit );
    this.router.delete(`${ this.path }/:id`, this.controller.delete );
  }
}

export default VacanciesRoute;