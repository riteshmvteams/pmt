"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Upload from "./Upload";
import { File, FileText, Trash, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Text from "../Text";
import Title from "../Title";

type AcceptedFiles = "img" | "pdf" | "csv" | "imgAndPdf" | "all";

export default function FileUpload({
  label = "Upload Files",
  btnLabel = "Upload",
  fieldLabel,
  multiple = true,
  accept = "all",
}: {
  label?: string;
  fieldLabel?: string;
  btnLabel?: string;
  multiple?: boolean;
  accept?: AcceptedFiles;
}) {
  return (
    <div className="m-auto">
      <div className="mb-2 flex items-center justify-between">
        <Title className="">{label}</Title>
      </div>

      <FileInput
        accept={accept}
        multiple={multiple}
        label={fieldLabel}
        btnLabel={btnLabel}
      />
    </div>
  );
}

const fileType = {
  "text/csv": <File className="h-4 w-4" />,
  "text/plain": <File className="h-4 w-4" />,
  "application/pdf": <FileText className="h-4 w-4" />,
  "application/xml": <File className="h-4 w-4" />,
  "application/zip": <File className="h-4 w-4" />,
  "application/gzip": <File className="h-4 w-4" />,
  "application/msword": <File className="h-4 w-4" />,
} as { [key: string]: React.ReactElement };

export const FileInput = ({
  label,
  btnLabel = "Upload",
  multiple = true,
  accept = "img",
  className,
}: {
  className?: string;
  label?: React.ReactNode;
  multiple?: boolean;
  btnLabel?: string;
  accept?: AcceptedFiles;
}) => {
  const [files, setFiles] = useState<Array<File>>([]);
  const imageRef = useRef<HTMLInputElement>(null);

  function handleFileDrop(event: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1]) return file[1];
      })
      .filter((file) => file !== undefined);

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    console.log("newFiles", newFiles);
  }

  function handleFileUpload() {
    if (files.length) {
      let formData = new FormData();
      for (let c = 0; c < files.length; c++) {
        formData.append(`files`, files[c]);
      }
      //   bulkFileUploadMutation.mutate(formData);
    } else {
      //   toast.error(<Text as="b">Please drop your file</Text>);
    }
  }

  const handleImageDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    (imageRef.current as HTMLInputElement).value = "";
  };

  return (
    <div className={className}>
      <Upload
        label={label}
        ref={imageRef}
        accept={accept}
        multiple={multiple}
        onChange={(event) => handleFileDrop(event)}
        className="mb-6 min-h-[280px] justify-center border-dashed bg-gray-50 dark:bg-transparent"
      />

      {files.length > 1 ? (
        <Text className="mb-2 text-gray-500">{files.length} files</Text>
      ) : null}

      {files.length > 0 && (
        <div className="max-h-[280px] overflow-y-auto scrollbar">
          <div className="grid grid-cols-1 gap-4">
            {files?.map((file: File, index: number) => (
              <div
                className="flex min-h-[58px] w-full items-center rounded-xl border border-muted px-3 dark:border-gray-300"
                key={file.name}
              >
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-muted bg-gray-50 object-cover px-2 py-1.5 dark:bg-transparent">
                  {file.type.includes("image") ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      fill
                      className=" object-contain"
                      priority
                      alt={file.name}
                      sizes="(max-width: 768px) 100vw"
                    />
                  ) : (
                    <>{fileType[file.type]}</>
                  )}
                </div>
                <div className="truncate px-2.5 text-sm">{file.name}</div>
                <Button
                  onClick={() => handleImageDelete(index)}
                  size="icon"
                  variant="outline"
                  className="ms-auto flex-shrink-0 bg-status-destructiveBg text-status-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
