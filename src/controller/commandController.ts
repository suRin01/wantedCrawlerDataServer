import { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { CommandService } from "../service/commandService";
import { logger } from "../util/winston";

interface Command{
	client: string;
	server: string;
	apiKey: string;
}

export class CommandController{
	public async controlCommandData(request: Request, response: Response): Promise<void>{
		logger.info("POST /command");
		const body:any = request.body;
		
		const commandData:Command = {
			client: body.client,
			server: body.server,
			apiKey: body.apiKey
		};


		const commandService:CommandService = new CommandService();

		const result:AxiosResponse<any> | undefined = await commandService.executeCommand(commandData);


		if(result !== undefined && typeof result.data === typeof {}){
			console.log(result.data);
			response.send(result.data);
			logger.info("Command executed.");
		}
		else{
			response.send({});
			logger.error("Command execution failed.");
		}
	}
}