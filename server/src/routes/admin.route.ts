import * as express from 'express';
import { AdminController } from '../controllers/admin.controller';
import passport from 'passport';
import authenticationMiddleware from '../middlewares/authentication.middleware';
import cors from "cors"

class AdminRoute{
  // public path = '/admin';
  public router = express.Router();
  private controller: AdminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {

    this.router.get( '/logout', this.controller.logout );

    this.router.get( '/login', this.controller.isAuthenticated );

    this.router.post( '/login', this.controller.login );
    this.router.post( '/registration', authenticationMiddleware(), this.controller.registration );
  }
}

export default AdminRoute;