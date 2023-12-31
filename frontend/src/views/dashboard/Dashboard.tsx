import { Button, CardContent, Typography } from "@mui/material";
import dashboardImg from "../../assets/dashboard-img.svg";
import AnnouncementCard from "../../components/UI/AnnouncementCard";
import {
  useGetAllAnnouncementsQuery,
  useGetAllQuizzesQuery,
} from "../../store/api-slice";
import QiuzCard from "../../components/UI/QuizCard";
import Card from "../../components/UI/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  const { data: quizzes, isLoading: isQuizLoading } = useGetAllQuizzesQuery();
  const { data: announcements, isLoading: isAnnLoading } =
    useGetAllAnnouncementsQuery();
  console.log(quizzes);
  console.log(announcements);

  return (
    <>
      <main>
        <Card sx={{ width: "100%", p: 0 }}>
          <CardContent
            className="grid grid-cols-1 sm:grid-cols-2"
            sx={{ p: { lg: "0 !important" } }}
          >
            <div className="py-4 ps-4">
              <Typography variant="h3" sx={{ fontWeight: "bold" }} mb={1}>
                {t("examTime").toUpperCase()}
              </Typography>
              <Typography mb={3}>{t("mainCaption")}</Typography>
              <Typography variant="caption" sx={{ color: "gray" }}>
                {t("qoute")}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ display: "block", mt: 2 }}
              >
                {t("ViewExamTips")}
              </Button>
            </div>
            <div className="relative">
              <img
                src={dashboardImg}
                alt=""
                className="absolute h-full w-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </main>
      <section className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="md:col-span-3 p-4" loading={isAnnLoading}>
            <div className="mb-4 flex justify-between w-full">
              <div>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  component="h4"
                >
                  {t("announcements")}
                </Typography>
                <Typography variant="caption" sx={{ color: "gray" }}>
                  Lorem ipsum dolor sit.
                </Typography>
              </div>
              <Button
                size="small"
                variant="text"
                component={Link as React.ElementType}
                to="/dashboard/announcement/all"
              >
                {t("all")}
              </Button>
            </div>
            {announcements?.map((announcement) => (
              <AnnouncementCard
                announcement={announcement}
                key={announcement._id}
              />
            ))}
          </Card>
          <Card className="p-4" loading={isQuizLoading}>
            <div className="mb-4 flex justify-between w-full">
              <div>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  component="h4"
                >
                  {t("WhatsDue")}
                </Typography>
                <Typography variant="caption" sx={{ color: "gray" }}>
                  Lorem ipsum dolor sit.
                </Typography>
              </div>
              <Button
                size="small"
                variant="text"
                component={Link as React.ElementType}
                to="/dashboard/quiz/all"
              >
                {t("all")}
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              {quizzes?.map((quiz) => (
                <QiuzCard key={quiz._id} quiz={quiz} />
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
