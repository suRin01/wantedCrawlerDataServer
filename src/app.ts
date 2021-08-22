import express from "express";
import "dotenv/config";
import {router} from "./routes/jobRouter";


export class server{
	private port = process.env.PORT;
	private app = express();
	
	public start = (): void =>{
		this.app.use(express.json());
		this.app.use(express.urlencoded());
		this.app.use("/", router);
		this.app.listen(this.port, ()=>{
			console.log(`Start Server on localhost:${this.port}`);
		});
		
	}

}


const instance = new server;
instance.start();