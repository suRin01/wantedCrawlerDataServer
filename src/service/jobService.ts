import {mapper} from "../mapper/mapper";
import {queryStrings} from "../common/constants";

interface excutionResult {
    status: number;
    data: Array<rowData>;
}


interface rowData{
	idx: number;
	pageId: string;
	companyName: number;
	companyAddress: string;
	hiringPosition: string;
}

export class userService{
	private dbMapper:mapper;
	constructor(){
		this.dbMapper = new mapper();

	}

	public getUserList = async (): Promise<excutionResult> =>{
		return await this.dbMapper.mapper(queryStrings.getUserList);
	
	}

	public insertUser = async (pageId: string, companyName: string, companyAddress: string, hiringPosition:string): Promise<excutionResult> =>{	
		return await this.dbMapper.mapper(queryStrings.insertUser, [pageId, companyName, companyAddress, hiringPosition]);
	
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