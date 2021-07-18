import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    process.env.MONGODB_CLUSTER_CONNECTION
  );

  return client;
}
