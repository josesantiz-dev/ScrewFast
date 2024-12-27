// src/models/User.js
import { connectToDatabase } from "../utils/db";
import { ObjectId } from "mongodb";
import bcrypt from 'bcryptjs';

export interface User{
    usuario: string;
    nombres?: string;
    apellido_paterno?: string;
    apellido_materno?: string;
    email?: string;
    contrasenia: string;
    telefono?: string;
    estatus: number; 
    id_empresa?: ObjectId | null;
    id_usuario_registro?: ObjectId | null;
    id_usuario_actualizacion?: ObjectId | null;
    imagen_perfil?: string | null;
}

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const createUser = async (userData: User) => {
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("Usuario");

  // Validar si el usuario ya existe
  const existtUserEmail = await usersCollection.findOne({ email: userData.email });
  const existUserNames = await usersCollection.findOne({ nombres: userData.nombres, apellido_paterno: userData.apellido_paterno, apellido_materno: userData.apellido_materno });
  const existUser = await usersCollection.findOne({ usuario: userData.usuario });
  if (existtUserEmail) {
    throw new Error("El usuario ya existe con el mismo Email");
  }else if(existUserNames){
    throw new Error("El usuario ya existe con el mismo nombre");
  }else if(existUser){
    throw new Error("El usuario ya existe con el mismo nombre de usuario");
  }
  const hashedPassword = await hashPassword(userData.contrasenia);
  const user = {
    ...userData,
    rol: 'admin',
    contrasenia: hashedPassword,
    created_at: new Date(),
    updated_at: new Date(),
  };
  // Insertar nuevo usuario en la base de datos
  const result = await usersCollection.insertOne(user);
  return result;
};


