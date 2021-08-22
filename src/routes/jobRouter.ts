import { JobController } from "../controller/jobController";
import { Router } from "express";

const jobController = new JobController();
export const router = Router();

router.get("/job", jobController.getJobList);
router.post("/job", jobController.postJob);