"use client";

import { Button } from "@/components/ui/button";
import AddIcon from "@/components/icons/AddIcon";
import Title from "@/components/shared/Title";
import { useModal } from "@/store/useModal";

export default function AddTaskType() {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();

  return (
    <>
      <Button
        className="flex gap-2 items-center mt-0"
        variant="outline"
        onClick={() => {
          setOpen(true);
          setTitle("New Task Type");
          setClassName("max-w-[600px]");
          setChildren(<AddTaskTypeForm />);
        }}
      >
        <AddIcon height="20px" width="20px" /> <Title>New Task Type</Title>
      </Button>
    </>
  );
}

const AddTaskTypeForm = () => {
  return <div className="p-4">Hello</div>;
};
