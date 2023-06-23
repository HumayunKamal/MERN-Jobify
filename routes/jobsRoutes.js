import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";
import testUser from "../middleware/testUser.js";

const router = Router();

router.route("/").post(testUser, createJob).get(getAllJobs);
// place before :id
router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);
router.route("/stats").get(showStats);

export default router;
