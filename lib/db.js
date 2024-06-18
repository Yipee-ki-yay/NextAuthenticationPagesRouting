import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://mopoz07:jS8EgxGRY4OqEWE3@cluster0.whuflcn.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0"
  );
  return client;
}
