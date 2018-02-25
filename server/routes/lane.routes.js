import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();
//Get all Lanes
router.route('/lanes').get(LaneController.getLanes);
//Add new Line
router.route('/lanes').post(LaneController.addLane);
//Delete a lane by LaneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);
//Edit lane
router.route('/lanes/:laneId').put(LaneController.editLane);

export default router;

