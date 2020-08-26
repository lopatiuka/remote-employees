import * as express from 'express';
import VacanciesService, { totalVacanciesCount } from '../services/vacancie.service';

class VacanciesController {
    private service: VacanciesService = new VacanciesService();

    public getAll = async( request: express.Request, response: express.Response ) => {
        let vacancies = await this.service.getAll();
        response.header( "Content-Range", `bytes 200-1000/${ totalVacanciesCount }` ).send( vacancies );
    }

    public getById = async( request: express.Request, response: express.Response ) => {
        let vacancie = await this.service.getById( request.params.id );
        response.send( vacancie );
    }

    public create = async( request: express.Request, response: express.Response ) => {
        let newVacancie = await this.service.create( request.body );
        response.send( newVacancie );
    }

    public edit = async( request: express.Request, response: express.Response ) => {
        let editedVacancie = await this.service.edit( request.params.id, request.body );
        response.send( editedVacancie );
    }

    public delete = async( request: express.Request, response: express.Response ) => {
        let deletedVacancie = await this.service.delete( request.params.id );
        response.send( deletedVacancie );
    }
}

export default VacanciesController;