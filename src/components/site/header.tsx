"use client";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant="default"
      size="menu"
      className={cn(
        isActive &&
          "bg-neutral-950 text-white hover:bg-primary hover:text-white hover:shadow-none dark:bg-neutral-950 dark:text-white dark:hover:bg-white dark:hover:text-neutral-950",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 lg:p-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              title="Home"
              className="flex items-center gap-2 rounded-md text-2xl font-bold ring-offset-white focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:bg-neutral-950 dark:focus-visible:ring-white"
            >
              <Logo className="size-12" />
              <div className="flex flex-col -space-y-2">
                <h2 className="text-lg font-black uppercase md:text-xl">
                  Monkin
                  {pathname !== "/" && (
                    <span className="hidden font-normal text-neutral-500 dark:text-neutral-400 sm:inline">
                      {` / ${pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}`}
                    </span>
                  )}
                </h2>
                <p className="hidden pt-1 text-sm font-medium leading-none sm:block sm:pt-0 sm:leading-snug md:text-base">
                  Making the impossible possible.
                </p>
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <Link
              href="https://github.com/pcho/monkin"
              className="inline-flex items-center rounded-md text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-white"
            >
              <IconBrandGithub size={18} />
              Source Code
            </Link>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <nav className="flex items-center gap-2">
        {[
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
