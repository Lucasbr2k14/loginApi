import { NextFunction, Request, Response } from "express";
import User from "../models/user";

type userType = {
  name:string,
  lastName:string,
  email:string,
  password:string,
  birthDate:Date,
  gender:string,
}

export async function createUser (req:Request, res:Response){
  
  const { name, lastName, email, password, birthDate, gender }:userType = req.body
  const genToken = token()
  
  const userReq = await User.create({
    name:name,
    lastName: lastName,
    email: email,
    password: password,
    birthDate: birthDate,
    gender: gender,
    token: genToken
  })

  res.status(201).send(userReq.toJSON())
}

export function verifyUsersData(req:Request, res:Response, next:NextFunction){

  const {name, lastName, email, birthDate, gender, password}:userType = req.body 
  const date = new Date(birthDate).valueOf()

  if(name && lastName && email && date && password) return next()
  else return res.status(400).send("Dados invalidos")

}

function token(){
  
  const length = 32
  const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@$1234567890a"
  const stringLength = string.length 
  let token = ""

  for(let i = 0; i < length; i++){
    const numberRandom = Math.floor(Math.random() * (stringLength - 0) + 0)
    const char = string[numberRandom]
    token = (token) ? token += char : char // Operador ternario
  }

  return token
}
