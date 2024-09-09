"use client";

import { Button } from "@/components/ui/button";

type Props = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function NoItems({
  icon,
  title,
  description,
  children,
  onClick,
}: Props) {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm min-h-[400px]">
      <div className="flex flex-col items-center gap-4 text-center">
        {icon && icon}
        <h3 className="text-xl font-medium font-lexend tracking-tighter">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {children && children}
      </div>
    </div>
  );
}
