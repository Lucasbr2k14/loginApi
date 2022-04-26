import { Request, Response } from "express";
import User from "../models/user"
import passwordHash from "../crypto/passwordHash"

type userType = {
  name:string,
  lastName:string,
  email:string,
  password:string,
  gender:string,
  token:string,
  birthDate:Date,
  createdAt:Date
}

export async function login(req:Request, res:Response){

  const { email, password } = req.body

  const user:Array<any> = await User.findAll({
    where:{
      email: email,
      password: passwordHash(password)
    }
  })


  console.log(user)

  if(user[0]) return res.status(200).send(userTreatment(user[0])); else return res.status(204).send("Não encontrado")
}

function userTreatment(user:userType){

  const {name, lastName, email, birthDate, gender, token, createdAt}:userType = user

  return {
    name,
    lastName,
    email,
    birthDate,
    gender,
    token,
    createdAt
  }
}
