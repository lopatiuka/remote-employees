import * as express from 'express';
import VacanciesController from '../controllers/vacancie.controller';
import authenticationMiddleware from '../middlewares/authentication.middleware';
import multer from 'multer';

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
    this.router.post( this.path, authenticationMiddleware(), this.controller.create );
    this.router.put(`${ this.path }/:id`, authenticationMiddleware(), this.controller.edit );
    this.router.delete(`${ this.path }/:id`, authenticationMiddleware(), this.controller.delete );
  }
}

export default VacanciesRoute;