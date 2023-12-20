import AnnouncementDao from "../db/dao/announcement.dao.js";
import tryCatchErr from "../middleware/tryCatchErr.js";

const announcementDao = new AnnouncementDao();

export const getAllAnnouncements = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const announcements = await announcementDao.getAllAnnouncements();

    res.json({ success: true, data: announcements });
  }
);
export const addNewAnnouncement = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const announcement = await announcementDao.createAnnouncement(req.body);
    res.json({ success: true, data: announcement });
  }
);

export const deleteAnnouncement = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const id = req.params.id;
    const announcement = await announcementDao.deleteAnnouncement(id);
    res.json({ success: true, data: announcement });
  }
);
export const editAnnouncement = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const id = req.params.id;
    const announcement = await announcementDao.editAnnouncement(id, req.body);
    res.json({ success: true, data: announcement });
  }
);
