"use client";

import { useYooptaEditor } from "@yoopta/editor";
import {
  List,
  ListOrdered,
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  LinkIcon,
  TextQuoteIcon,
  CodeIcon,
  FileCodeIcon,
} from "lucide-react";
import React from "react";

import { useMemo } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
// IMPORT TOOLS
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool";
import Blockquote from "@yoopta/blockquote";
import ActionMenu, { DefaultActionMenuRender } from "@yoopta/action-menu-list";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";
import Embed from "@yoopta/embed";
import Image from "@yoopta/image";
import Link from "@yoopta/link";
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings";
// IMPORT MARKS
import {
  Bold,
  Italic,
  CodeMark,
  Underline,
  Strike,
  Highlight,
} from "@yoopta/marks";
import { cn } from "@/lib/utils";

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

const uploadToCloudinary = (file: any, key: string) => {
  return {
    secure_url: "",
    width: 200,
    height: 200,
  };
};

const plugins = [
  Paragraph,
  Blockquote,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Link,
  Embed,
  Image,
  Image.extend({
    options: {
      async onUpload(file) {
        console.log(file, "file====>");
        const data = await uploadToCloudinary(file, "image");

        return {
          src: data.secure_url,
          alt: "cloudinary",
          sizes: {
            width: data.width,
            height: data.height,
          },
        };
      },
    },
  }),
];

const ChatYoptaEditor = () => {
  const editor = useMemo(() => createYooptaEditor(), []);

  return (
    <div className="relative border overflow-hidden">
      <YooptaEditor
        placeholder="Type something"
        editor={editor}
        plugins={plugins}
        marks={MARKS}
        selectionBoxRoot={false}
      >
        <ChatEditor />
      </YooptaEditor>
    </div>
  );
};

export default ChatYoptaEditor;

function ChatEditor() {
  const editor = useYooptaEditor();

  console.log(editor, "editor.formats.bold==>");

  return (
    <div className="w-full absolute bottom-0 left-0 flex p-1 gap-1">
      <button
        type="button"
        className={cn(
          "w-6 h-6 bg-muted flex items-center justify-center rounded-md",
          editor.formats.bold.isActive() ? "bg-primary" : ""
        )}
        data-state-active={editor.formats.bold?.isActive()}
        onClick={() => editor.formats.bold.toggle()}
      >
        <BoldIcon size={15} strokeWidth={2} />
      </button>
      <button
        className="w-6 h-6 bg-muted flex items-center justify-center rounded-md"
        data-state-active={editor.formats.italic?.isActive()}
        onClick={() => editor.formats.italic.toggle()}
      >
        <ItalicIcon size={15} strokeWidth={2} />
      </button>
      <button
        className=""
        data-state-active={editor.formats.strike?.isActive()}
        onClick={() => editor.formats.strike.toggle()}
      >
        <StrikethroughIcon size={15} strokeWidth={1.5} />
      </button>
      {/* <span className={s.separator} /> */}
      <button className="" onClick={() => alert("in progress")}>
        <LinkIcon size={15} strokeWidth={1.5} />
      </button>
      {/* <span className={s.separator} /> */}
      <button
        className=""
        data-state-active={editor.blocks.NumberedList?.isActive()}
        onClick={() => editor.blocks.NumberedList.toggle({ focus: true })}
      >
        <ListOrdered size={15} strokeWidth={1.5} />
      </button>
      <button
        className=""
        data-state-active={editor.blocks.BulletedList?.isActive()}
        onClick={() => editor.blocks.BulletedList.toggle({ focus: true })}
      >
        <List size={15} strokeWidth={1.5} />
      </button>
      {/* <span className={s.separator} /> */}
      <button
        className=""
        data-state-active={editor.blocks.Blockquote?.isActive()}
        onClick={() => {
          editor.blocks.Blockquote.toggle({ focus: true });
        }}
      >
        <TextQuoteIcon size={15} strokeWidth={1.5} />
      </button>
      {/* <span className={s.separator} /> */}
      <button className="" onClick={() => editor.formats.code.toggle()}>
        <CodeIcon size={15} strokeWidth={1.5} />
      </button>
      <button
        className=""
        onClick={() => {
          editor.blocks.Code.toggle({ focus: true });
        }}
      >
        <FileCodeIcon size={15} strokeWidth={1.5} />
      </button>
    </div>
  );
}
