import {mapper} from "../mapper/mapper";
import {queryStrings} from "../common/constants";

interface excutionResult {
    status: number;
    data: Array<rowData>;
}


interface rowData{
	idx: number;
	page_id: string;
	company_name: number;
	company_address: string;
	hiring_position: string;
}

export class userService{
	private dbMapper:mapper;
	constructor(){
		this.dbMapper = new mapper();

	}

	public getUserList = async (): Promise<excutionResult> =>{
		return await this.dbMapper.mapper(queryStrings.getUserList);
	
	}

	public insertUser = async (page_id: string, company_name: string, company_address: string, hiring_position:string): Promise<excutionResult> =>{	
		return await this.dbMapper.mapper(queryStrings.insertUser, [page_id, company_name, company_address, hiring_position]);
	
	}

	// public deleteUser = async (id: string): Promise<responseResult> =>{
	// 	const result = await this.dbMapper.mapper(queryStrings.deleteUser, [id]);
		
	// 	return this.responseFactory.createResult(result.status, result.data);
		
	// }
	
	// public patchUser = async (id: string, age: string): Promise<responseResult> =>{
	// 	const result = await this.dbMapper.mapper(queryStrings.patchUser, [id, age]);
		
	// 	return this.responseFactory.createResult(result.status, result.data);
		
	// }
	
}