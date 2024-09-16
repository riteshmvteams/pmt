import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function CustomAvatar({ className }: { className?: string }) {
  return (
    <Avatar className={cn("w-10 h-10 border", className)}>
      <AvatarImage
        // src="https://github.com/shadcn.png"
        src={`https://robohash.org/cat${Math.random()}.png`}
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
