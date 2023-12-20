export default interface Announcement {
  _id?: string;
  subject: string;
  content: string;
  by: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  __v?: number;
}
