import axios, { AxiosResponse } from "axios";
import { logger } from "../util/winston";

interface Command{
	client: string;
	server: string;
	apiKey: string;
}

export class CommandService{

	public executeCommand = async (commandData:Command): Promise<AxiosResponse<any> | undefined>=>{
		const result: AxiosResponse<any>|undefined = await axios.post(commandData.client, {
			server: commandData.server,
			apiKey: commandData.apiKey
		})
			.catch(()=>{
				logger.error("Error erupted while sending axios request");
				return undefined;
			});

		return result;
	}
	
}