import { Request, Response } from "express";
import { jobService } from "../service/jobService";
import { Result, ValidationError, validationResult } from "express-validator";
import { logger } from "../util/winston";

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

export class JobController{
	private service: jobService;
	constructor(){
		this.service = new jobService();
	}

	public async getJobList(request: Request, resposne: Response):Promise<executionResult> {
		logger.info("GET /job");
		const result:executionResult = await this.service.getJobList();
		resposne.json(result);

		logger.info("Get Job list");

		return result;
	}

	public async postJob(request: Request, resposne: Response): Promise<executionResult>{
		logger.info("POST /job");
		const errors: Result<ValidationError> = validationResult(request);
		if (!errors.isEmpty()) {
			resposne.status(400).json({ errors: errors.array() });
			logger.error("Validation error on posting job list");

			return {
				status: 500,
				data: []
			};
		}

		const body:any = request.body;

		const pageId:string = body.page_id;
		const companyName:string = body.company_name;
		const companyAddress:string = body.company_address;
		const hiringPosition:string = body.hiring_position;
		console.log(pageId, companyName, companyAddress, hiringPosition);

		const result = await this.service.insertJob(pageId, companyName, companyAddress, hiringPosition);
		
		resposne.json(result);

		logger.info("Job Posted");

		return result;
	}
}