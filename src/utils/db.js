// src/utils/db.js
import { MongoClient } from "mongodb";

let client;
let db;
const URI ='mongodb+srv://joseph1990:rWslTWmTF7IB9dHz@cluster0.x2liw.mongodb.net/kaktus?retryWrites=true&w=majority&appName=Cluster0';

export const connectToDatabase = async () => {
  if (db) return { db, client }; // Si ya está conectada, reutilízala

  client = new MongoClient(URI); // Asegúrate de tener la URI en tu archivo .env
  await client.connect();
  db = client.db("kaktus"); // El nombre de tu base de datos
  return { db, client };
};
