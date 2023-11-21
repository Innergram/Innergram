import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initials(input: string) {
  return input
    .match(/(\b\S)?/g)
    ?.join("")
    .toUpperCase();
}
