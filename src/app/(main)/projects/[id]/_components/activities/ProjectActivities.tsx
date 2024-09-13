import { LayoutDashboard, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDateWithWeekday } from "@/lib/helpers";

export default function ProjectActivities() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h3 className="font-lexend font-medium text-xl">This Week</h3>
        <div className="flex flex-col gap-3 relative ml-4 after:content-[''] after:absolute after:left-[11px] after:z-[-1] after:top-2.5 after:bottom-2.5 after:w-0.5 after:bg-primary/50">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <LayoutDashboard
                className="w-[14px] h-[14px]"
                strokeWidth={2.5}
              />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                created a{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  New Task
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <Plus className="w-[14px] h-[14px]" strokeWidth={2.5} />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Ritesh
                </span>{" "}
                has been added by{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <LayoutDashboard
                className="w-[14px] h-[14px]"
                strokeWidth={2.5}
              />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                created a{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  New Task
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-lexend font-medium text-xl">This Month</h3>
        <div className="flex flex-col gap-3 relative ml-4 after:content-[''] after:absolute after:left-[11px] after:z-[-1] after:top-2.5 after:bottom-2.5 after:w-0.5 after:bg-primary/50">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <LayoutDashboard
                className="w-[14px] h-[14px]"
                strokeWidth={2.5}
              />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                created a{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  New Task
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <Plus className="w-[14px] h-[14px]" strokeWidth={2.5} />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Ritesh
                </span>{" "}
                has been added by{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <LayoutDashboard
                className="w-[14px] h-[14px]"
                strokeWidth={2.5}
              />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                created a{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  New Task
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-lexend font-medium text-xl">This Year</h3>
        <div className="flex flex-col gap-3 relative ml-4 after:content-[''] after:absolute after:left-[11px] after:z-[-1] after:top-2.5 after:bottom-2.5 after:w-0.5 after:bg-primary/50">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <LayoutDashboard
                className="w-[14px] h-[14px]"
                strokeWidth={2.5}
              />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                created a{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  New Task
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <Plus className="w-[14px] h-[14px]" strokeWidth={2.5} />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Ritesh
                </span>{" "}
                has been added by{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
              <LayoutDashboard
                className="w-[14px] h-[14px]"
                strokeWidth={2.5}
              />
            </span>
            <div className="flex gap-3 items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-muted-foreground text-sm">
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  Super Admin
                </span>{" "}
                created a{" "}
                <span className="text-foreground cursor-pointer hover:underline underline-offset-2 font-medium">
                  New Task
                </span>{" "}
                in the project on {formatDateWithWeekday(new Date())}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
