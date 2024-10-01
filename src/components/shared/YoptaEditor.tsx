"use client";

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

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenu,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
  LinkTool: {
    render: DefaultLinkToolRender,
    tool: LinkTool,
  },
};

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

const YoptaEditor = () => {
  const editor = useMemo(() => createYooptaEditor(), []);

  return (
    <div className="relative">
      <YooptaEditor
        placeholder="Type something"
        editor={editor}
        plugins={plugins}
        tools={TOOLS}
        marks={MARKS}
      />
    </div>
  );
};

export default YoptaEditor;
