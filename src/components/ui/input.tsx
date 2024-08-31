import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border-2 border-neutral-200 bg-white p-4 text-lg ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:border-neutral-400 focus-visible:bg-neutral-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-700 dark:focus-visible:border-neutral-700 dark:focus-visible:bg-neutral-800 dark:focus-visible:ring-white md:p-8 md:text-2xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
