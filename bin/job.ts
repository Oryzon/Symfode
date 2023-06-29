import { schedule } from 'node-cron';

export abstract class Job {
    public cron: string | null = null;
    public name: string | null = null;
    public scheduler: schedule;

    public schedule() {
        if (this.cron !== null && this.name !== null) {
            this.scheduler = schedule;

            this.scheduler(this.cron, async() => {
                this.execute();
            })
        } else {
            console.log("ERROR : The task can't be started. The name and the cron are required.");
        }
    }

    abstract execute(): void;
}
