// src/utils/db.js
import { MongoClient } from "mongodb";

let client;
let db;
const URI = import.meta.env.MONGO_DB_URL;

export const connectToDatabase = async () => {
  if (db) return { db, client }; // Si ya está conectada, reutilízala

  client = new MongoClient(URI); // Asegúrate de tener la URI en tu archivo .env
  await client.connect();
  db = client.db("kaktus"); // El nombre de tu base de datos
  return { db, client };
};
