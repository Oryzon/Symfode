import { Job } from "../../bin/job";

export class HelloWorldJob extends Job {
    public cron = "* * * * *";
    public name = "Hello World Job";

    constructor() {
        super();
        this.schedule();
    }

    public execute() {
        console.log("Hello World.");
    }
}
