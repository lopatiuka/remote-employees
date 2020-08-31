import express from 'express';
import * as bodyParser from 'body-parser';
import  session from 'express-session';
import multer from "multer";
import path from "path";

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
      cb(null, "images");
  },
  filename: (req, file, cb) =>{
      cb(null, file.originalname);
  }
});

const ENV = process.env.NODE_ENV;

class App {
  public app: express.Application;
  public port: number;
 
  constructor( controllers, port ) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers( controllers );
  }
  
  private initializeMiddlewares() {
    
    if( ENV === "production" ){
      this.app.use( express.static( path.join( __dirname, "../client/biuld" ) ) );
      this.app.use( ( req,res ) => {
        res.sendFile( path.join( __dirname, "../client/build/index.html" ) );
      });
    }  
    
    this.app.use(bodyParser.json()); 
    this.app.use(multer({storage:storageConfig}).single("image"));
    this.app.use(function( req, res, next ) {
      res.header( "Access-Control-Allow-Origin", "http://localhost:3000"  ); 
      res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept, Content-Range" );
      res.header( "Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH" );
      res.header( "Access-Control-Allow-Credentials", "true" );
      res.header( "Access-Control-Expose-Headers", "Content-Range, X-Total-Count" );
      next();
    });
    
    this.app.use( session({
      secret: 'SECRET', 
      cookie: { maxAge: 120000 },
      resave: true,
      saveUninitialized: true
    }));
  }
 
  private initializeControllers( controllers ) {
    controllers.forEach( ( controller ) => {
      this.app.use( '/', controller.router );
    });
  }
 
  public listen() {
    this.app.listen( this.port, () => {
      console.log(`App listening on the port ${this.port}` );
    });
  }
}
 
export default App;