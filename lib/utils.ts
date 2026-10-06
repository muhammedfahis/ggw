import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// trailingSlash is on, so paths may arrive as "/about/"; compare without it.
export function normalizePath(pathname: string | null) {
  if (!pathname || pathname === "/") return "/"
  return pathname.replace(/\/$/, "")
}

export function isBlueWavePath(pathname: string | null) {
  return normalizePath(pathname) === "/the-great-blue-wave"
}
