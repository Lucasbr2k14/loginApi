import crypto from "crypto"

export default function (password:string){
  
  const hash = crypto.createHash("sha256").update(password).digest("hex")
  
  return hash
}
