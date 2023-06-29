import { Controller } from "../../bin/controller";
import { Request, Response} from "express";

export class HelloWorldController extends Controller {
    apiRoad = 'hello';

    public routes() {
        this.router.get('/hello-world', this.index);
    }

    public index(req: Request, res: Response) {
        res.send("Hello World.");
    }
}
