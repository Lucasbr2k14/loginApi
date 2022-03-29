import { Request, Response } from "express";
import { userInfo } from "os";
import User from "../models/user";


export async function login(req:Request, res:Response){

  const email = req.body.email
  const password = req.body.password


  const user = await User.findAll({
    where:{
      email: email,
      password: password
    }
  })

  if(user[0]) return res.status(200).send(user[0]); else return res.status(404).send("Não encontrado")
}