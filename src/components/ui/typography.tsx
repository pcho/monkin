import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const typographyStyles = cva("leading-snug [text-wrap:balance]", {
  variants: {
    variant: {
      p: "text-4xl font-medium text-neutral-950 dark:text-white md:text-6xl",
      h1: "break-words text-[186px] font-black uppercase leading-none text-neutral-950 dark:text-white",
      h2: "break-words text-6xl font-black uppercase leading-none text-neutral-950 dark:text-white md:text-9xl",
      small:
        "text-center text-lg leading-none text-neutral-700 dark:text-neutral-400",
      footer: "text-sm text-neutral-950 dark:text-white",
    },
  },
});

type TypographyProps = PropsWithChildren &
  VariantProps<typeof typographyStyles> & {
    variant?: "p" | "h1" | "h2" | "small" | "footer";
    className?: string;
  };

export function Typography(props: TypographyProps) {
  const { variant = "p", children, className } = props;
  const classNames = cn(typographyStyles({ variant }), className);

  if (variant === "h1") return <h1 className={classNames}>{children}</h1>;
  if (variant === "h2") return <h2 className={classNames}>{children}</h2>;
  if (variant === "footer") return <p className={classNames}>{children}</p>;
  if (variant === "small")
    return <small className={classNames}>{children}</small>;

  return <p className={classNames}>{children}</p>;
}
