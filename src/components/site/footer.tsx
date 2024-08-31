import { Button } from "@/ui/button";
import { Typography } from "@/ui/typography";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileTypePdf,
} from "@tabler/icons-react";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <Button variant="footer" size="footer" asChild>
    <Link href={href}>
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  </Button>
);

const Footer = () => {
  return (
    <footer className="sticky bottom-0 flex flex-col space-y-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 md:p-6 lg:p-8">
      <div className="text-center sm:text-left">
        <Typography variant="footer" className="text-base font-black uppercase">
          &copy; Monkin, LLC.
        </Typography>
        <Typography variant="footer" className="text-sm sm:text-base">
          2035 Sunset Lake Road, Suite B-2 Newark, Delaware 19702
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
        <SocialLink
          href="https://github.com/pcho"
          icon={<IconBrandGithub size={18} />}
          label="@pcho"
        />
        <SocialLink
          href="https://www.linkedin.com/in/pchojecki/"
          icon={<IconBrandLinkedin size={18} />}
          label="pchojecki"
        />
        <SocialLink
          href="https://x.com/pc__ho"
          icon={<IconBrandX size={18} />}
          label="@pc__ho"
        />
        <SocialLink
          href="static/cv-przemyslaw-chojecki-2024.pdf"
          icon={<IconFileTypePdf size={18} />}
          label="CV"
        />
      </div>
    </footer>
  );
};

export default Footer;
