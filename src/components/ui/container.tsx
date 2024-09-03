import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-2xl space-y-12 px-4 py-8 md:space-y-20 md:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
