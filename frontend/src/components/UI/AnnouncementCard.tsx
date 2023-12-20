import { FC } from "react";
import Announcement from "../../interfaces/Announcement.interface";
import { Avatar, Divider } from "@mui/material";
import textClip from "../../utils/textClip";

const AnnouncementCard: FC<{ announcement: Announcement }> = ({
  announcement,
}) => {
  return (
    <div className="flex flex-row w-full items-center justify-between py-2">
      <div className="w-1/2 sm:w-1/3 flex flex-row items-center gap-2 justify-start">
        <Avatar />
        <div>
          <h6 className=" text-sm md:text-base font-bold">{announcement.by}</h6>
          <p className="text-xs text-gray-500">{announcement.subject}</p>
        </div>
      </div>
      <div className="mx-2 h-[30px]">
        <Divider orientation="vertical" />
      </div>

      <div className="grow">
        <p className="text-xs md:text-base">
          {textClip(announcement.content, 110)}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
