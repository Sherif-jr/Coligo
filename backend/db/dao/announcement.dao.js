import AnnouncementModel from "../models/announcement.model.js";

export default class AnnouncementDao {
  /**
   *
   * @param { {subject: string,content: string, by: string}} announcement
   */
  async createAnnouncement(announcement) {
    return await AnnouncementModel.create(announcement);
  }
  async getAllAnnouncements() {
    return await AnnouncementModel.find({});
  }
  /**
   *
   * @param {string} id
   * @param {{subject: string,content: string, by: string}} announcement
   */
  async editAnnouncement(id, announcement) {
    return await AnnouncementModel.findByIdAndUpdate(id, announcement, {
      new: true,
    });
  }
  /**
   * @param {string} id
   */
  async deleteAnnouncement(id) {
    return await AnnouncementModel.findByIdAndDelete(id);
  }
  /**
   * @param {string} id
   */
  async getAnnouncementById(id) {
    return await AnnouncementModel.findById(id);
  }
}
