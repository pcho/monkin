import ContactForm from "@/site/contact-form";
import { Container } from "@/ui/container";
import { Separator } from "@/ui/separator";
import { Typography } from "@/ui/typography";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

function ContactInfo({
  href,
  icon: Icon,
  text,
  title,
}: {
  href: string;
  icon: typeof IconMail | typeof IconBrandWhatsapp | typeof IconBrandTelegram;
  text: string;
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
      {text}
    </a>
  );
}

export default function ContactPage() {
  return (
    <Container>
      <Typography variant="h1">Contact Me</Typography>
      <Separator />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <ContactInfo
          href="mailto:p@monkin.co"
          icon={IconMail}
          text="p@monkin.co"
          title="Email"
        />
        <ContactInfo
          href="https://wa.me/48537538521"
          icon={IconBrandWhatsapp}
          text="+48 537 538 521"
          title="WhatsApp"
        />
        <ContactInfo
          href="https://telegram.me/pcho0"
          icon={IconBrandTelegram}
          text="@pcho0"
          title="Telegram"
        />
      </div>
      <Separator />
      <ContactForm />
    </Container>
  );
}
