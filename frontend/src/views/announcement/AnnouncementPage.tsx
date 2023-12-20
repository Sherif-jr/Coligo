import AnnouncementCard from "../../components/UI/AnnouncementCard";
import Card from "../../components/UI/Card";
import { useGetAllAnnouncementsQuery } from "../../store/api-slice";

const AnnouncementPage = () => {
  const { data: announcements, isLoading } = useGetAllAnnouncementsQuery();
  return (
    <main>
      <Card loading={isLoading} className="min-h-[60vh]">
        <div className="flex flex-col gap-2 w-full">
          {announcements?.map((announcement) => (
            <Card key={announcement._id}>
              <AnnouncementCard announcement={announcement} />
            </Card>
          ))}
        </div>
      </Card>
    </main>
  );
};

export default AnnouncementPage;
