import { JobController } from "../controller/jobController";
import { body } from "express-validator";
import { Router } from "express";

const jobController:JobController = new JobController();
export const jobRouter: Router = Router();

jobRouter.get("/job", jobController.getJobList.bind(jobController));
jobRouter.post("/job",body("page_Id").isNumeric , jobController.postJob.bind(jobController));