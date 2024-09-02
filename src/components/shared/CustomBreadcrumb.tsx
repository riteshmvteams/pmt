import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

type Props = {
  paths: {
    id: number;
    title: string;
    href?: string;
    icon?: React.ReactNode;
  }[];
};

export default function CustomBreadcrumb({ paths }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths?.map((path) => {
          return path?.href ? (
            <React.Fragment key={path?.id}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={path?.href}
                  className="flex items-center gap-1"
                >
                  {path?.icon ? path?.icon : null}
                  {path?.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          ) : (
            <BreadcrumbItem key={path?.id}>
              <BreadcrumbPage>{path?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          );
        })}
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator /> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
