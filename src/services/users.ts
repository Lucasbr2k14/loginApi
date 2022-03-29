import { Request, Response } from "express";
import User from "../models/user"

type userType = {
	name:string,
	lastName:string,
	email:string,
	password:string,
	birthDate:Date,
	gender:string,
  token: string,
  createdAt: string,
  updatedAt: string
}

export async function findAll(req:Request, res:Response){

	const users:any = await User.findAll()
  const UsersLength = users.length
  const usersArray:Array <object> = []
  
  users.forEach((user:userType) => {

    const {name, lastName, email, birthDate, gender, token, createdAt, updatedAt} = user
    
    usersArray.push({
      name:name,
      lastName: lastName,
      email: email,
      birthDate: birthDate,
      gender: gender,
      token: token,
      createdAt: createdAt,
      updatedAt:updatedAt
    })   
    
  })

  if(UsersLength > 0){
    
    res.status(200).json({
      users: usersArray,
      UsersLength: UsersLength
    })

  }else{

    res.status(204).json({
      users: usersArray,
      UsersLength: UsersLength
    })
  
  }

}