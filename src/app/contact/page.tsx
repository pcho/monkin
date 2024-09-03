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
}: {
  href: string;
  icon: typeof IconMail | typeof IconBrandWhatsapp | typeof IconBrandTelegram;
  text: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 text-2xl font-medium text-neutral-950 hover:underline dark:text-white md:text-4xl"
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
        />
        <ContactInfo
          href="https://wa.me/48537538521"
          icon={IconBrandWhatsapp}
          text="+48 537 538 521"
        />
        <ContactInfo
          href="https://telegram.me/pcho0"
          icon={IconBrandTelegram}
          text="@pcho0"
        />
      </div>
      <Separator />
      <ContactForm />
    </Container>
  );
}
