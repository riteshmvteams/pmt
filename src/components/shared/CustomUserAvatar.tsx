import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CustomUserAvatar = ({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image?: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-10 h-10 border">
        <AvatarImage
          alt="user_avatar"
          src={image ? image : `https://robohash.org/${Math.random()}.png`}
        />
        <AvatarFallback className="text-xs">CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h4 className="text-xs font-lexend font-normal">{title}</h4>
        <span className="text-xs font-light">{subTitle}</span>
      </div>
    </div>
  );
};

export default CustomUserAvatar;
