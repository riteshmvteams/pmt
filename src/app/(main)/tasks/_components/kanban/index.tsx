"use client";

import { useState } from "react";

// DnD imports
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

// Components
import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Container from "@/app/(main)/tasks/_components/kanban/Container";
import Items, {
  ItemNotAvailable,
} from "@/app/(main)/tasks/_components/kanban/Items";

type DNDType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
};

export default function TaskKanban() {
  const [containers, setContainers] = useState<DNDType[]>([
    {
      id: `container-1`,
      title: "Open",
      items: [
        { id: `item-1`, title: "Task 1" },
        { id: `item-2`, title: "Task 2" },
      ],
    },
    {
      id: `container-2`,
      title: "In Progress",
      items: [
        { id: `item-3`, title: "Task 3" },
        { id: `item-4`, title: "Task 4" },
      ],
    },
    {
      id: `container-3`,
      title: "Resolved",
      items: [{ id: `item-5`, title: "Task 5" }],
    },
    {
      id: `container-4`,
      title: "Closed",
      items: [
        { id: `item-6`, title: "Task 6" },
        { id: `item-7`, title: "Task 7" },
        { id: `item-8`, title: "Task 8" },
      ],
    },
  ]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [currentContainerId, setCurrentContainerId] =
    useState<UniqueIdentifier>();
  const [containerName, setContainerName] = useState("");
  const [itemName, setItemName] = useState("");
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const onAddContainer = () => {
    if (!containerName) return;
    const id = `container-${Date.now()}`;
    setContainers([
      ...containers,
      {
        id,
        title: containerName,
        items: [],
      },
    ]);
    setContainerName("");
    setShowAddContainerModal(false);
  };

  const onAddItem = () => {
    if (!itemName) return;
    const id = `item-${Date.now()}`;
    const container = containers.find((item) => item.id === currentContainerId);
    if (!container) return;
    container.items.push({
      id,
      title: itemName,
    });
    setContainers([...containers]);
    setItemName("");
    setShowAddItemModal(false);
  };

  function findValueOfItems(id: UniqueIdentifier | undefined, type: string) {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.items.find((item) => item.id === id)
      );
    }
  }

  const findItemTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "item");
    if (!container) return "";
    const item = container.items.find((item) => item.id === id);
    if (!item) return "";
    return item.title;
  };

  const findContainerTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "container");
    if (!container) return "";
    return container.title;
  };

  const findContainerItems = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "container");
    if (!container) return [];
    return container.items;
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  }

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;

    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      if (!activeContainer || !overContainer) return;

      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id
      );

      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex
        );

        setContainers(newItems);
      } else {
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem
        );
        setContainers(newItems);
      }
    }

    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      if (!activeContainer || !overContainer) return;

      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );

      let newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1
      );
      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (
      active.id.toString().includes("container") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === active.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === over.id
      );

      let newItems = [...containers];
      newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
      setContainers(newItems);
    }

    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      if (!activeContainer || !overContainer) return;

      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id
      );

      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex
        );

        setContainers(newItems);
      } else {
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem
        );
        setContainers(newItems);
      }
    }

    setActiveId(null);
  }

  return (
    <div className="flex w-full justify-center py-6">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={containers.map((i) => i.id)}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
            {containers?.map((container) => (
              <Container
                id={container.id}
                title={container.title}
                key={container.id}
                onAddItem={() => {
                  setShowAddItemModal(true);
                  setCurrentContainerId(container.id);
                }}
              >
                {container?.items?.length ? (
                  <SortableContext items={container.items.map((i) => i.id)}>
                    <div className="flex items-start flex-col gap-y-4">
                      {container.items.map((i) => (
                        <Items title={i.title} id={i.id} key={i.id} />
                      ))}
                    </div>
                  </SortableContext>
                ) : (
                  <ItemNotAvailable />
                )}
              </Container>
            ))}
          </div>
        </SortableContext>
        <DragOverlay adjustScale={false}>
          {/* Drag Overlay For item Item */}
          {activeId && activeId.toString().includes("item") && (
            <Items id={activeId} title={findItemTitle(activeId)} />
          )}
          {/* Drag Overlay For Container */}
          {activeId && activeId.toString().includes("container") && (
            <Container id={activeId} title={findContainerTitle(activeId)}>
              {findContainerItems(activeId).map((i) => (
                <Items key={i.id} title={i.title} id={i.id} />
              ))}
            </Container>
          )}
        </DragOverlay>
      </DndContext>

      {/* Add Item Modal */}
      <Dialog
        open={showAddItemModal}
        onOpenChange={(open) => setShowAddItemModal(open)}
      >
        <DialogContent>
          <h2 className="text-lg">Add Item</h2>
          <Input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item Name"
            className="mt-4"
          />
          <Button className="mt-4" onClick={onAddItem}>
            Add Item
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
