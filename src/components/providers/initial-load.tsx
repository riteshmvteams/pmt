"use client";

import { getLocalStorageValue } from "@/lib/helpers";
import { useColorSetting } from "@/store/colorSetting";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function InitialLoad({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const { updateColor } = useColorSetting((state) => state);

  useEffect(() => {
    const currentColor = getLocalStorageValue("color") || "blue";
    if (theme && currentColor) {
      updateColor({ name: currentColor, theme });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return <>{children}</>;
}
