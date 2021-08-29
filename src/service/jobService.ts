import {mapper} from "../mapper/mapper";
import {queryStrings} from "../common/constants";

interface executionResult {
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

export class jobService{
	private dbMapper:mapper;
	constructor(){
		this.dbMapper = new mapper();

	}

	public getJobList = async (): Promise<executionResult> =>{
		return await this.dbMapper.mapper(queryStrings.getJobList);
	
	}

	public insertJob = async (pageId: string, companyName: string, companyAddress: string, hiringPosition:string): Promise<executionResult> =>{	
		return await this.dbMapper.mapper(queryStrings.insertJob, [pageId, companyName, companyAddress, hiringPosition]);
	
	}
	
}