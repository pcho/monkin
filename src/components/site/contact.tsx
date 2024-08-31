import { Button } from "@/ui/button";
import { Separator } from "@/ui/separator";
import { Typography } from "@/ui/typography";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Separator />
      <Typography variant="p">
        Curious about what we can accomplish together?
      </Typography>
      <Button variant="default" size="default" className="mt-12" asChild>
        <Link href="/contact">Just shoot me an email</Link>
      </Button>
    </div>
  );
};

export default Contact;
