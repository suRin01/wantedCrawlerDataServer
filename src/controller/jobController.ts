import express, {Request, Response} from "express";
import {userService} from "../service/jobService";
const router = express.Router();
const service = new userService();

router.get("/job", async (req: Request, res: Response) => {
	const result = await service.getUserList();

	console.log(result);
	res.json(result);
});

router.post("/job", async (req: Request, res: Response) => {
	const body = req.body;

	const pageId = body.page_id;
	const companyName = body.company_name;
	const companyAddress = body.company_address;
	const hiringPosition = body.hiring_position;

	const result = await service.insertUser(pageId, companyName, companyAddress, hiringPosition);

	console.log(await service.getUserList());
	res.json(result);
});

// router.delete("/deletejob", async (req: Request, res: Response) => {
// 	const id = req.body.id;

// 	const result = await service.deleteUser(id);

// 	console.log(service.getUserList());
// 	res.json(result);
// });

// router.put("/patchjob", body("age").isNumeric(), async (req: Request, res: Response) => {
// 	const errors = validationResult(req);
// 	if (!errors.isEmpty()) {
// 		return res.status(400).json({ errors: errors.array() });
// 	}
// 	const body = req.body;

// 	const id = body.id;
// 	const age = body.age;

// 	console.log(service.getUserList());
// 	const result = await service.patchUser(id, age);
// 	res.json(result);
// });

export = router;

