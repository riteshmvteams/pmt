"use client";

import * as React from "react";
import { CircleUserRound, Clock, MoreVertical, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Title from "@/components/shared/Title";
import { formatDateWithWeekday, trimText } from "@/lib/helpers";

const emails = [
  {
    id: 1,
    from: "Super Admin",
    subject: "Reminder: Daily Time Updates Required in PMT System",
    preview: `Hi,
                We have noticed that some of you have not been logging your daily time updates in our Project Management Tool (https://pmt.ayecs.com). It is essential that you record your daily activities, including work completed, research and development, Daily Learnings or any other tasks related to your projects. These entries should be well-formatted as they are crucial for our internal records, billing purposes, and client updates.
                Please be aware that failure to update the PMT will result in being marked 'Absent' for the day. If you have missed any previous updates, please consult with your Project Managers as soon as possible to ensure your records are accurate and up-to-date.
                Thank you for your attention to this matter.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 2,
    from: "My Virtual Teams",
    subject: "Ubuntu Version Upgrade Advisory",
    preview: `Hello everyone, If you encounter a popup prompting you to upgrade your Ubuntu version, please select the option "Don't Upgrade." Proceeding with the upgrade may affect your current applications, as it will update and remove some packages, potentially impacting their functionality.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 3,
    from: "Git MVT",
    subject: "git-mvt.awsstaged.in will be undergoing maintenance",
    preview: `Hello everyone,
                Please note that git-mvt.awsstaged.in will be undergoing maintenance. It will be available for you to work on again starting at 11:30 am today.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 4,
    from: "Super Admin",
    subject: "Reminder: Daily Time Updates Required in PMT System",
    preview: `Hi,
                We have noticed that some of you have not been logging your daily time updates in our Project Management Tool (https://pmt.ayecs.com). It is essential that you record your daily activities, including work completed, research and development, Daily Learnings or any other tasks related to your projects. These entries should be well-formatted as they are crucial for our internal records, billing purposes, and client updates.
                Please be aware that failure to update the PMT will result in being marked 'Absent' for the day. If you have missed any previous updates, please consult with your Project Managers as soon as possible to ensure your records are accurate and up-to-date.
                Thank you for your attention to this matter.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 5,
    from: "My Virtual Teams",
    subject: "Ubuntu Version Upgrade Advisory",
    preview: `Hello everyone, If you encounter a popup prompting you to upgrade your Ubuntu version, please select the option "Don't Upgrade." Proceeding with the upgrade may affect your current applications, as it will update and remove some packages, potentially impacting their functionality.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 6,
    from: "Git MVT",
    subject: "git-mvt.awsstaged.in will be undergoing maintenance",
    preview: `Hello everyone,
                Please note that git-mvt.awsstaged.in will be undergoing maintenance. It will be available for you to work on again starting at 11:30 am today.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 7,
    from: "Super Admin",
    subject: "Reminder: Daily Time Updates Required in PMT System",
    preview: `Hi,
                We have noticed that some of you have not been logging your daily time updates in our Project Management Tool (https://pmt.ayecs.com). It is essential that you record your daily activities, including work completed, research and development, Daily Learnings or any other tasks related to your projects. These entries should be well-formatted as they are crucial for our internal records, billing purposes, and client updates.
                Please be aware that failure to update the PMT will result in being marked 'Absent' for the day. If you have missed any previous updates, please consult with your Project Managers as soon as possible to ensure your records are accurate and up-to-date.
                Thank you for your attention to this matter.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 8,
    from: "My Virtual Teams",
    subject: "Ubuntu Version Upgrade Advisory",
    preview: `Hello everyone, If you encounter a popup prompting you to upgrade your Ubuntu version, please select the option "Don't Upgrade." Proceeding with the upgrade may affect your current applications, as it will update and remove some packages, potentially impacting their functionality.`,
    date: "2025-07-19T20:59:35.206Z",
  },
  {
    id: 9,
    from: "Git MVT",
    subject: "git-mvt.awsstaged.in will be undergoing maintenance",
    preview: `Hello everyone,
                Please note that git-mvt.awsstaged.in will be undergoing maintenance. It will be available for you to work on again starting at 11:30 am today.`,
    date: "2025-07-19T20:59:35.206Z",
  },
];

export default function AnnouncementListing() {
  const [selectedEmail, setSelectedEmail] = React.useState<number | null>(null);

  return (
    <div className="flex max-h-[650px] border">
      {/* Email list */}
      <div className="flex-1 flex flex-col w-1/2 ">
        <div className="p-4 border-b bg-background">
          <div className="flex items-center">
            <Input placeholder="Search Announcements..." className="mr-2" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="overflow-auto scrollbar">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`p-4 border-b cursor-pointer ${
                selectedEmail === email.id
                  ? "bg-primary/10 dark:bg-primary/20"
                  : "hover:bg-primary/5 dark:hover:bg-primary/10"
              }`}
              onClick={() => setSelectedEmail(email.id)}
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex gap-1 items-center">
                  <CircleUserRound className="h-[14px] w-[14px]" />
                  <Title className="text-xs">{email.from}</Title>
                </div>
                <span className="text-xs text-muted-foreground">
                  {formatDateWithWeekday(email.date)}
                </span>
              </div>
              <Title className="font-light text-base">
                {trimText(email.subject, 50)}
              </Title>
              <div className="text-sm text-muted-foreground/60 truncate">
                {trimText(email.preview, 100)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email preview */}
      {selectedEmail && (
        <div className="w-1/2 bg-background p-4 border-l flex-1 overflow-auto scrollbar">
          <div className="flex justify-between items-center mb-4">
            <Title className="text-lg">
              {emails.find((e) => e.id === selectedEmail)?.subject}
            </Title>
            <div className="flex space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                  <DropdownMenuItem>Mark as read</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedEmail(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <Title>{emails.find((e) => e.id === selectedEmail)?.from}</Title>
              <div className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {formatDateWithWeekday(
                  emails.find((e) => e.id === selectedEmail)?.date || new Date()
                )}
              </div>
            </div>
          </div>
          <div className="prose max-w-none text-muted-foreground">
            <p>{emails.find((e) => e.id === selectedEmail)?.preview}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              quos fuga consectetur maiores enim ipsam fugit, voluptate officia
              beatae ipsa accusantium eveniet quidem deleniti cum tempore ut
              sunt repudiandae. Id nesciunt, quidem deserunt dolores ex debitis
              possimus ducimus sed aut, voluptatem nulla dolorum amet qui culpa
              quod quisquam error labore corrupti tempore, aliquid autem.
              Praesentium tenetur qui, odit optio sint corrupti sequi libero!
              Odio esse aperiam animi corrupti iste quisquam id totam corporis.
              Numquam atque iusto dignissimos quidem doloribus at pariatur nihil
              minus debitis rerum eveniet eius quos ipsam neque nam voluptas quo
              suscipit, vitae obcaecati optio rem repellat quibusdam voluptatum?
              Quam illum blanditiis molestias omnis, dolore eveniet, qui maiores
              perferendis id deserunt quasi? Mollitia adipisci voluptates
              laboriosam similique sint ipsa omnis architecto nemo! Deleniti,
              exercitationem sint! Magni distinctio magnam non, nemo,
              perspiciatis, iure porro mollitia ducimus quam dolorum ex quasi
              provident velit. Eius quos dicta nihil porro at unde hic aut
              officia exercitationem? Dicta exercitationem veniam facere ipsa
              quae dolores deleniti? Porro et quas eaque aliquid ipsam inventore
              qui cum nisi pariatur beatae. Quasi sunt error tempora sint
              explicabo in debitis reiciendis? Accusantium, autem fuga quae
              nostrum ea qui vero ullam non voluptatem placeat, libero culpa
              dignissimos quam ex totam iusto dolorum. Ad, quasi quidem placeat
              labore id cumque corrupti asperiores blanditiis ratione, rerum
              perferendis iusto! Iste veniam quod magnam quaerat excepturi. Id
              laudantium obcaecati ipsum culpa molestias neque eaque illum quos,
              tenetur voluptas sint, perspiciatis saepe nesciunt iure? Aut
              voluptatem vero omnis laudantium hic assumenda reprehenderit ad
              aspernatur atque, optio nobis pariatur! Dolores debitis
              praesentium ipsum blanditiis in placeat odit magni laborum enim
              minus nam rem omnis cupiditate earum dolor repellendus, soluta
              qui! Facere similique voluptate ratione. Id praesentium impedit,
              officiis expedita dolorem quas eos quibusdam dicta sint corrupti
              iste blanditiis excepturi nesciunt, aspernatur itaque perferendis?
              Eum, aut!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
