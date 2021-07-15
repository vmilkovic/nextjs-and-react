import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    process.env.MONGODB_CLUSTER_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const resutl = await db.collection(collection).insertOne(document);

  return resutl;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
