import { Router } from "express";
import {
  joiValidatorBody,
  joiValidatorParams,
} from "../middleware/joiValidator";
import { idSchema } from "../joi/id.joi";
import { announcementSchema } from "../joi/announcement.joi";
import {
  addNewAnnouncement,
  deleteAnnouncement,
  getAllAnnouncements,
} from "../controller/announcement.controller";

const router = Router();

router.get("/", getAllAnnouncements);
router.post("/", joiValidatorBody(announcementSchema), addNewAnnouncement);
router.delete("/:id", joiValidatorParams(idSchema), deleteAnnouncement);

export default router;
