import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService { 
    private readonly envConfig: { [key: string]: string };

    constructor() {
        // If you are deploying your app with docker use the docker environment system instead !
        try {
            this.envConfig = dotenv.parse(
                fs.readFileSync(`${process.env.NODE_ENV}.env`)
            );
        } catch (err) {
            this.envConfig = {}; // Potentially set some defaults if the file doesn't exist.
        }
    }

    get(key: string): string {
        // Check if exists already in the operating environment
        if (process.env[key] !== undefined) {
            return process.env[key];
        }
        // Else check the file
        return this.envConfig[key];
    }
}