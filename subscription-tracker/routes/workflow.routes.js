import { Router } from 'express'
import { setReminders } from '../controllers/workflow.controller.js';

const workflowRouter = Router()

workflowRouter.get('/subscription/reminder', setReminders)

export default workflowRouter;