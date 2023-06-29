import { Router, Request, Response } from "express";
import { ControllerInterface } from "./controller.interface";

export abstract class Controller implements ControllerInterface {
    public router: Router;
    public apiRoad: string = '';

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void { }
}
