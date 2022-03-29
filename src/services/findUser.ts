import { Request, Response } from "express";
import User from "../models/user"

export async function findUser(req:Request, res:Response){
  
  const tokenQuary = req.params.token

  console.log(tokenQuary)

  const userFind = await User.findOne({
    where: {token: tokenQuary}
  })

  const user = userFind?.get()


  if(user){

    const {name, lastName, email, birthDate, gender, token, createdAt, updatedAt} = user
    
    res.send({
      name:name,
      lastName:lastName,
      email: email,
      gender: gender,
      token: token,
      birthDate: birthDate,
      createdAt: createdAt,
      updatedAt: updatedAt
    })

  }else{
    res.send("Não encontrado")
  }
}