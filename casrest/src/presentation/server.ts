import express, { Router } from 'express';
import path from 'path'
import fileUpload from 'express-fileupload'
import compresion from 'compression'
import morgan from 'morgan';
// import { json } from 'stream/consumers';

interface Options {
  port: number;
  public_path?: string;
  routes: Router
}


export class Server {

  public  readonly app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, public_path = 'public', routes } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  
  
  async start() {
    

    //* Middlewares
    this.app.use( express.json() ) // raw
    this.app.use( express.urlencoded({ extended: true }) ) //x-www-form-urlencoded
    this.app.use( compresion() )
    this.app.use( morgan('dev'));
    this.app.use( fileUpload({
      limits: { fileSize: 50 * 1024 * 1024}
    }))

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );


    // Routes
    this.app.use( this.routes )



    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
      res.sendFile(indexPath);
    });
    

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });
  }

  public close() {
     this.serverListener?.close();
  }

}