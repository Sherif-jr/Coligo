import { Router } from "express";
import {
  joiValidatorBody,
  joiValidatorParams,
} from "../middleware/joiValidator.js";
import { idSchema } from "../joi/id.joi.js";
import { announcementSchema } from "../joi/announcement.joi.js";
import {
  addNewAnnouncement,
  deleteAnnouncement,
  editAnnouncement,
  getAllAnnouncements,
} from "../controller/announcement.controller.js";

const router = Router();

router.get("/", getAllAnnouncements);
router.post("/", joiValidatorBody(announcementSchema), addNewAnnouncement);
router.delete("/:id", joiValidatorParams(idSchema), deleteAnnouncement);
router.put(
  "/:id",
  joiValidatorParams(idSchema),
  joiValidatorBody(announcementSchema),
  editAnnouncement
);

export default router;
