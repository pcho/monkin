import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border-2 border-neutral-200 bg-white p-4 text-lg ring-offset-white placeholder:text-neutral-500 focus-visible:border-neutral-400 focus-visible:bg-neutral-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-700 dark:focus-visible:border-neutral-700 dark:focus-visible:bg-neutral-800 dark:focus-visible:ring-white md:p-8 md:text-2xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
