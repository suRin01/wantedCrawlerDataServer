import express from "express";
import "dotenv/config";
import userController from "./controller/userController";


export class server{
	private port = process.env.PORT;
	private app = express();
	
	public start = (): void =>{
		this.app.use(express.json());
		this.app.use(express.urlencoded());
		this.app.use("/", userController);
		this.app.listen(this.port, ()=>{
			console.log("start");
		});
		
	}

}


const instance = new server;
instance.start();