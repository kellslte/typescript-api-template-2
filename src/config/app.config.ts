import { config } from "dotenv";
import { join } from 'path';
config();

const appConfig = {
    port: process.env.PORT,
    appKey: process.env.APP_KEY,
    srcFolder: join(process.cwd(), './src'),
    mailFolder: join(process.cwd(), './src/app/providers/mail/templates'),
    services: {},
    providers: {}
};

export default appConfig;