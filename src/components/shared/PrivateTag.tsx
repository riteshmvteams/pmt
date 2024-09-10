import { Lock } from "lucide-react";
import { Badge } from "../ui/badge";

const PrivateTag = () => {
  return (
    <Badge
      className="gap-1.5 items-center rounded-md bg-red-50 text-red-600 h-8 border-red- dark:border-red-50 font-lexend font-base text-xs"
      variant="outline"
    >
      <Lock className="w-[14px] h-[14px]" />
      <span>Private</span>
    </Badge>
  );
};

export default PrivateTag;
