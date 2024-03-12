// appwrite.ts
import { Client, Databases, Account } from "appwrite";

const client: Client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c363f271045246aa80'); // Replace with your project ID
export const database: Databases = new Databases(client);

export const account: Account = new Account(client);
