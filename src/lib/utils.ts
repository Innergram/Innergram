import { type ClassValue, clsx } from "clsx";
import { Buffer } from "buffer";
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

export function latin1ToUtf8(input: string) {
  const buffer = Buffer.from(input, "latin1");
  
  return buffer.toString("utf-8");
}