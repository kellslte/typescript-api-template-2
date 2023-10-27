import { config } from 'dotenv';
import mongoose from 'mongoose';
config();

export const connectToDatabase = async function(){
    const mongoUrl =
      process.env.MONGODB_URI ||
      "mongodb://127.0.0.1:27017/typescript_template?retryWrites=true";

    try {
        mongoose.Promise = Promise;
        mongoose.connect(mongoUrl);

        mongoose.connection.on('open', () => {
            console.info(`✌️ Connection to database is established!`);
        });
    } catch (error: any) {
        mongoose.connection.on('error', (error: Error) => {
            console.error(
              `🔇We ecountered the following error trying to establish a database connection ${error}`
            );
        })
    }
}