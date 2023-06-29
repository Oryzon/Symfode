import "reflect-metadata"
import "dotenv/config";
import express, { Application } from "express";
import { AppKernel } from "../bin/app-kernel";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

class Kernel extends AppKernel{
    private app: Application;

    constructor() {
        super();
        this.app = express();
        this.configuration();

        const controller: Promise<void> = this.controllers();
        const jobs: Promise<void> = this.jobs();
    }

    public configuration(): void {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(bodyParser.json());
    }

    public async controllers(): Promise<void> {
        let controllers = await this.autoInject('src/controller');

        controllers.forEach((controller) => {
            this.app.use(`/${process.env.HTTP_PATH}/${controller.apiRoad}`, controller.router);
        });
    }

    public async jobs(): Promise<void> {
        if (process.env.JOBS === '1') {
            let jobs = await this.autoInject('src/job');
        }
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port.`);
        })
    }
}

const kernel = new Kernel();
kernel.start();
