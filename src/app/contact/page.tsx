import ContactForm from "@/site/contact-form";
import { Container } from "@/ui/container";
import { Typography } from "@/ui/typography";

export const metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  return (
    <Container>
      <Typography variant="h1" className="mb-6">
        Contact Me
      </Typography>
      <ContactForm />
    </Container>
  );
}
