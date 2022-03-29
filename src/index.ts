import express from "express"
import cors from "cors"
import fs from "fs"
import sequelize from "./models/conection/sequelize"

class App{

  public express: express.Application

  constructor(port:Number){
    this.express = express()
    
    this.expressConfig()
    this.listner(port)
    this.routes()
    this.dataBaseConection()
  }

  private expressConfig():void{
    this.express.use(express.json())
    this.express.use(express.urlencoded({extended:false}))
    this.express.use(cors())
  }

  private routes(){
    fs.readdirSync(__dirname + "/routes").filter(file => file.endsWith(".ts")).forEach( async (file)=>{
      const router = (await import(`${__dirname}/routes/${file}`)).default
      this.express.use(router)
      console.log("Carregando:", file)
    })
  }

  private listner(port:Number):void{
    this.express.listen(port, () => console.log(`Servidor rodando\nhttp://localhost:${port}`))
  }

  private dataBaseConection():void{
    sequelize.authenticate()
  }

}

const app = new App(8080)
