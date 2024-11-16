import { twMerge } from "./../../node_modules/tailwind-merge/src/lib/tw-merge";
import { clsx } from "clsx";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};


