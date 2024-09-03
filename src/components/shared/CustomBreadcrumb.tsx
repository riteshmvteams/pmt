import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
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
                <BreadcrumbLink asChild className="flex items-center gap-1">
                  <Link href={path?.href}>
                    {path?.icon ? path?.icon : null}
                    {path?.title}
                  </Link>
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
      </BreadcrumbList>
    </Breadcrumb>
  );
}
