import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-white",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow hover:bg-neutral-950 hover:text-white hover:shadow-none dark:bg-primary dark:text-white dark:hover:bg-white dark:hover:text-neutral-950",
        footer:
          "hover:bg-primary hover:text-white hover:shadow dark:hover:bg-primary dark:hover:text-white dark:hover:shadow-none",
      },
      size: {
        default:
          "w-full rounded-md p-4 text-sm font-black uppercase sm:text-base md:w-max md:px-6 md:py-4 lg:text-lg",
        menu: "gap-2 rounded p-2 text-sm font-black uppercase sm:text-base md:px-4 md:py-2",
        footer: "gap-2 rounded p-2 text-sm sm:text-base md:px-4 md:py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
