#!/usr/bin/env node
import { Command } from "commander";

export abstract class CommandBin {
    public program: Command;

    constructor() {
        this.program = new Command();
    }
}
