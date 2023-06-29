#!/usr/bin/env node
import { AppKernel } from "./app-kernel";
import { Command } from "commander";

export class Cli extends AppKernel {
    private commands: Command;

    constructor() {
        super();

        let cli = this.init();
    }

    public async init(): Promise<void> {
        let commands = await this.autoInject('src/command');
    }
}

new Cli();
