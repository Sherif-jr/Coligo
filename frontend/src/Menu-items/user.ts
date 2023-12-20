import { MenuItem } from "../interfaces/MenuItem.interface";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";

const user: MenuItem = {
  id: "userGroup",
  title: "User Actions",
  children: [
    {
      id: "Quizzes",
      title: "Quizzes",
      url: "/dashboard/quiz/all",
      icon: QuizTwoToneIcon,
    },
    {
      id: "Announcements",
      title: "Announcements",
      url: "/dashboard/announcement/all",
      icon: CampaignTwoToneIcon,
    },
  ],
};

export default user;
