import ReactQuill, { type ReactQuillProps } from "react-quill";

import "react-quill/dist/quill.snow.css";
import Text from "./Text";
import { cn } from "@/lib/utils";
import Title from "./Title";

interface QuillEditorProps extends ReactQuillProps {
  error?: string;
  label?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  toolbarPosition?: "top" | "bottom";
}

export default function QuillEditor({
  id,
  label,
  error,
  className,
  labelClassName,
  errorClassName,
  toolbarPosition = "top",
  ...props
}: QuillEditorProps) {
  const quillModules = {
    toolbar: [
      // [{ header: [1, 2, 3, 4, 5, 6, false] }],

      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  };

  return (
    <div className={cn(className)}>
      {label && (
        <Title className={cn("mb-2 block", labelClassName)}>{label}</Title>
      )}
      <ReactQuill
        modules={quillModules}
        // formats={quillFormats}
        className={cn(
          "react-quill",
          toolbarPosition === "bottom" && "react-quill-toolbar-bottom relative",
          className
        )}
        {...props}
      />
      {error && (
        <Text className={cn("text-xs text-red-500", errorClassName)}>
          {error}
        </Text>
      )}
    </div>
  );
}
