import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { mission, nonprofit, values } from '@/lib/company-info';
import { Button } from '@/components/ui/button';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Background Pattern */}
      {heroImage && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-10 dark:opacity-[0.06]"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        </div>
      )}

      <main className="flex-grow relative z-10">
        <section id="hero" className="py-20 md:py-24 bg-transparent">
          <div className="container mx-auto px-4 relative text-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 text-primary">
              AI for Everyone
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We build and deploy accessible AI solutions to and empower communities worldwide.
            </p>
          </div>
        </section>

        <section id="mission" className="py-20 md:py-24 bg-card/60">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">
              {mission.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {mission.description}
            </p>
          </div>
        </section>

        <section id="nonprofit" className="py-20 md:py-24 bg-background/60">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            {nonprofit.icon}
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              {nonprofit.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {nonprofit.description}
            </p>
          </div>
        </section>

        <section id="values" className="py-20 md:py-24 bg-card/60">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {values.map((value) => (
                <AccordionItem value={value.title} key={value.title} className="bg-background/60 border-none rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                     <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-full p-3">
                           {value.icon}
                        </div>
                        <div className="flex-1">
                           <h3 className="font-headline text-2xl">{value.title}</h3>
                           <p className="text-muted-foreground text-sm mt-1">{value.description}</p>
                        </div>
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground pl-16">{value.details}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="support" className="py-20 md:py-24 bg-background/60">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-accent">Support Our Mission</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We rely on the generosity of individuals and organizations to continue our work. Your donation helps us develop and deploy AI solutions that empower underserved communities.
            </p>
            <Button asChild size="lg">
              <Link href="https://buy.stripe.com/9B6cN72Ue17c3aa3Vp8Vi00">Donate</Link>
            </Button>
             <p className="text-md text-muted-foreground mt-8">
                If you are interested in volunteering or exploring a partnership, please <Link href="#contact" className="text-primary underline hover:text-primary/80">reach out to us via our contact form</Link>.
              </p>
          </div>
        </section>
        
        <section id="contact" className="py-20 md:py-24 bg-card/80">
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-8 border-t bg-card/80">
          <div className="container mx-auto text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} XNet. All Rights Reserved.</p>
          </div>
      </footer>
    </div>
  );
}
