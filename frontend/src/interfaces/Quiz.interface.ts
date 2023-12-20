export default interface Quiz {
  _id?: string;
  title: string;
  courseName: string;
  topicName: string;
  questions: string[];
  dueDate: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  __v?: number;
}
