import { CommandBin } from "../../bin/command";

export class HelloWorldCommand extends CommandBin {

    constructor() {
        super();

        this.program
            .name('hello')
            .description('Say Hello')
            .action(() => {
                this.execute();
            }).createHelp();

        this.program.parse(process.argv);
    }

    public execute() {
        console.log("Hello World.");
    }
}
