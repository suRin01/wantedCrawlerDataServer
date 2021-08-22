// import express, {Request, Response} from "express";
// import {jobService} from "../service/jobService";
// const router = express.Router();
// const service = new jobService();

// router.get("/job", async (req: Request, res: Response) => {
// 	const result = await service.getJobList();

// 	console.log(result);
// 	res.json(result);
// });

// router.post("/job", async (req: Request, res: Response) => {
// 	const body = req.body;

// 	const pageId = body.page_id;
// 	const companyName = body.company_name;
// 	const companyAddress = body.company_address;
// 	const hiringPosition = body.hiring_position;

// 	const result = await service.insertJob(pageId, companyName, companyAddress, hiringPosition);

// 	res.json(result);
// });



// export = router;

