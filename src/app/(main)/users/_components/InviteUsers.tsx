"use client";

import AddUsers from "@/components/shared/addThings/AddUsers";
import { ModalTitle } from "@/components/sidebar/CreateNew";
import { Button } from "@/components/ui/button";
import { useModal } from "@/store/useModal";
import { Users } from "lucide-react";
import React from "react";

export default function InviteUsers() {
  const { setTitle, setChildren, setClassName, setOpen } = useModal();
  return (
    <Button
      onClick={() => {
        setTitle(<ModalTitle Icon={Users} title="Invite New Users" />);
        setChildren(<AddUsers />);
        setClassName("max-w-[800px]");
        setOpen(true);
      }}
    >
      Invite Users
    </Button>
  );
}
