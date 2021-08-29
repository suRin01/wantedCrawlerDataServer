import { CommandController } from "../controller/commandController";
import { Router } from "express";

const commandController:CommandController = new CommandController();
export const commandRouter:Router = Router();

commandRouter.post("/command", commandController.controlCommandData.bind(commandController));