import { Router } from "express";
import quizRoutes from "./quiz.routes";
import announcementRoutes from "./announcement.routes";

const router = Router();
router.use("/quiz", quizRoutes);
router.use("/announcement", announcementRoutes);

export default router;
