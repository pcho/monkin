import ContactForm from "@/site/contact-form";
import { Container } from "@/ui/container";
import { Separator } from "@/ui/separator";
import { Typography } from "@/ui/typography";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandZoom,
  IconMail,
} from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

function ContactInfo({
  href,
  icon: Icon,
  title,
}: {
  href: string;
  icon: typeof IconMail | typeof IconBrandWhatsapp | typeof IconBrandTelegram;
  title: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 text-2xl font-medium text-neutral-950 hover:underline dark:text-white md:text-4xl"
      target="_blank"
      title={title}
    >
      <Icon size={48} />
      {title}
    </a>
  );
}

export default function ContactPage() {
  return (
    <Container>
      <Typography variant="h1">Contact Me</Typography>
      <Separator />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <ContactInfo
          href="mailto:p@monkin.co"
          icon={IconMail}
          title="p@monkin.co"
        />
        <ContactInfo
          href="https://wa.me/48537538521"
          icon={IconBrandWhatsapp}
          title="WhatsApp"
        />
        <ContactInfo
          href="https://telegram.me/pcho0"
          icon={IconBrandTelegram}
          title="Telegram"
        />
        <ContactInfo
          href="https://cal.com/monkin"
          icon={IconBrandZoom}
          title="Book a call"
        />
      </div>
      <Separator />
      <ContactForm />
    </Container>
  );
}
