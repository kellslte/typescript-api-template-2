import { app, server } from "./bootstrap/server";
import appConfig from "./config/app.config";
import { connectToDatabase } from "./config/database.config";

const bootstrap = async function(){
    try {
        await connectToDatabase();

        server.listen(appConfig.port, () => {
            console.info(`🚀 Application listening on ${appConfig.port}`);
        });
    } catch (e: any)  {
        console.error(`☣️ Error starting application: ${e.message}`);

        process.exit(1);
    }
}

bootstrap();