import express, {Request, Response} from "express";
const router = express.Router();

import {userService} from "../service/userService";
const service = new userService();

router.get("/getjob", async (req: Request, res: Response) => {
	const result = await service.getUserList();

	console.log(result);
	res.json(result);
});

router.post("/postjob", async (req: Request, res: Response) => {
	const body = req.body;

	const company_name = body.company_name;
	const page_id = body.page_id;
	const company_address = body.company_address;
	const hiring_position = body.hiring_position;

	const result = await service.insertUser(page_id, company_name, company_address, hiring_position);

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

