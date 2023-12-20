import { Router } from "express";
import quizRoutes from "./quiz.routes.js";
import announcementRoutes from "./announcement.routes.js";

const router = Router();
router.use("/quiz", quizRoutes);
router.use("/announcement", announcementRoutes);

export default router;
