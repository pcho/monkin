import { info, portfolio } from "@/data/content";
import Contact from "@/site/contact";
import { Container } from "@/ui/container";
import { Typography } from "@/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Typography variant="h1" className="leading-[0.8]">
        Design & Technology Studio
      </Typography>
      <Typography variant="p">{info.text}</Typography>
      <Typography variant="p">{info.answer}</Typography>
      <Typography variant="p">{info.me}</Typography>

      <div className="-mx-4 mt-12 space-y-12 px-4 md:-mx-6 md:mt-20 md:px-6 lg:-mx-8 lg:px-8">
        {portfolio.map(({ filename, description }) => (
          <div key={filename} className="relative w-full">
            <Image
              src={`/static/img/${filename}`}
              alt={description}
              width={1536}
              height={1536}
              className="h-auto w-full rounded-t-xl object-contain"
              sizes="(min-width: 1536px) 1536px, 100vw"
              priority
              quality={100}
              unoptimized
            />
            <div className="rounded-b-xl bg-neutral-200 p-4 dark:bg-neutral-900">
              <Typography variant="small" className="mt-2">
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </Container>
  );
}
