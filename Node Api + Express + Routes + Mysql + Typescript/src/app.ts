import express, { Application } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

// Routes
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostRoutes);
    }

    async listen(): Promise<void> {
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}