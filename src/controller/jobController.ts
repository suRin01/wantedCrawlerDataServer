import {Request, Response} from "express";
import {jobService} from "../service/jobService";
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

export class JobController{
	private service: jobService;
	constructor(){
		console.log("job Router created");
		this.service = new jobService();
	}

	public async getJobList():Promise<excutionResult> {
		console.log("get job list");
		const result = await this.service.getJobList();

		console.log(result);
		return result;
	}

	public async postJob(request: Request): Promise<excutionResult>{
		const body = request.body;

		const pageId = body.page_id;
		const companyName = body.company_name;
		const companyAddress = body.company_address;
		const hiringPosition = body.hiring_position;

		const result = await this.service.insertJob(pageId, companyName, companyAddress, hiringPosition);

		return result;
	}
}