"use client";

import { useEffect, useState } from "react";
import { COLOR_NAMES, type ColorName } from "@/lib/colors";

const DEFAULT_COLOR: ColorName = "red";

export function useColor(intervalMs = 2000): ColorName {
  const [color, setColor] = useState<ColorName>(DEFAULT_COLOR);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * COLOR_NAMES.length);
      setColor(COLOR_NAMES[randomIndex]);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return color;
}