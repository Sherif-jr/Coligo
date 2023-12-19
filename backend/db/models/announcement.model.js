import { Schema, model } from "mongoose";
const announcementSchema = new Schema(
  {
    subject: { type: String, required: true },
    content: { type: String, required: true },
    content: { type: String, required: true },
    by: { type: String, required: true },
  },
  { timestamps: true }
);

const AnnouncementModel = model("Announcement", announcementSchema);
export default AnnouncementModel;
