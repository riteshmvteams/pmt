"use client";

import { useYooptaEditor } from "@yoopta/editor";
import { BoldIcon, ItalicIcon, SendHorizontal } from "lucide-react";
import React from "react";

import { useMemo } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
// IMPORT TOOLS
import Blockquote from "@yoopta/blockquote";
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
    <div className="relative border overflow-hidden p-2 rounded-md">
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

  console.log(editor.blocks, "block===>");

  return (
    <div className="w-full absolute bottom-0 left-0 flex items-center justify-between p-1 gap-1 bg-primary/5">
      <div className="flex items-center gap-1">
        <button
          className={cn(
            "w-6 h-6 bg-muted flex items-center justify-center rounded-md",
            editor.formats.bold.isActive()
              ? "bg-primary text-primary-foreground"
              : ""
          )}
          data-state-active={editor.formats.bold?.isActive()}
          onClick={() => editor.formats.bold.toggle()}
        >
          <BoldIcon size={15} strokeWidth={2} />
        </button>
        <button
          className={cn(
            "w-6 h-6 bg-muted flex items-center justify-center rounded-md",
            editor.formats.italic.isActive()
              ? "bg-primary text-primary-foreground"
              : ""
          )}
          data-state-active={editor.formats.italic?.isActive()}
          onClick={() => editor.formats.italic.toggle()}
        >
          <ItalicIcon size={15} strokeWidth={2} />
        </button>
      </div>

      <button className="p-2 text-muted-foreground hover:text-foreground bg-muted">
        <SendHorizontal className="" />
      </button>
    </div>
  );
}
