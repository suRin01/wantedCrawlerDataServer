import express, {Request, Response} from "express";
import {userService} from "../service/jobService";
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

export class jobRouter{
	private service: userService;
	constructor(){
		console.log("job Router created");
		this.service = new userService();
	}

	public async getJobList():Promise<excutionResult> {


		const result = await this.service.getUserList();

		console.log(result);
		return result;


	}

	public async postJob(request: Request): Promise<excutionResult>{
		const body = request.body;

		const pageId = body.page_id;
		const companyName = body.company_name;
		const companyAddress = body.company_address;
		const hiringPosition = body.hiring_position;

		const result = await this.service.insertUser(pageId, companyName, companyAddress, hiringPosition);

		console.log(await this.service.getUserList());
		return result;
	}
}