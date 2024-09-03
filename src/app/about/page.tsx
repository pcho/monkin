import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { about, clients, faq } from "@/data/content";
import Contact from "@/site/contact";
import { Container } from "@/ui/container";
import { Separator } from "@/ui/separator";
import { Typography } from "@/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <Container>
      <Typography variant="h1">About me</Typography>
      <Separator />
      <Typography variant="p">{about.intro}</Typography>
      <Typography variant="p">{about.approach}</Typography>
      <Separator />
      <Typography variant="h2">FAQ</Typography>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, index) => (
          <AccordionItem key={`faq-${index}`} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Typography variant="h2">Selected Clients</Typography>
      <div className="mt-6 grid grid-cols-2 gap-4 md:gap-12">
        {clients.map((client, index) => (
          <Typography
            key={`client-${index}`}
            variant="p"
            className="pt-0 text-2xl md:pt-2"
          >
            {client}
          </Typography>
        ))}
      </div>
      <Contact />
    </Container>
  );
};

export default About;
