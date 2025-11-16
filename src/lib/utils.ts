/**
 * Combines class names into a single string, filtering out any falsy values.
 * 
 * @param classes - A list of class names, which can be strings, undefined, null, or boolean values.
 * @returns A single string containing all truthy class names joined by a space.
 */
export function cn(...classes: (string | undefined | null | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }
  