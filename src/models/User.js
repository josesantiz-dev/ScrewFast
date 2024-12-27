// src/models/User.js
import { connectToDatabase } from "../utils/db";

export const createUser = async (userData) => {
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("users");

  // Validar si el usuario ya existe
  const existingUser = await usersCollection.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  // Insertar nuevo usuario en la base de datos
  const result = await usersCollection.insertOne(userData);
  return result;
};
