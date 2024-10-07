import Title from "@/components/shared/Title";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function UserNotifications() {
  return (
    <div className="w-full sm:w-1/2 border rounded-lg p-5">
      <div className="flex items-center justify-between">
        <Title className="text-lg">Notification Settings For User</Title>
        <Switch />
      </div>
    </div>
  );
}
