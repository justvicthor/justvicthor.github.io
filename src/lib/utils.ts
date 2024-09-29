import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isValidBadgeVariant = (variant: string): variant is "default" | "secondary" | "destructive" | "outline" | "red" | "emerald" | "ochre" => {
  return ["default", "secondary", "destructive", "outline", "red", "emerald", "ochre"].indexOf(variant) !== -1;
};


