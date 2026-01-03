import Image from 'next/image';

const founders = [
  {
    name: "Joshua S. Doucette",
    title: "Founder and CEO",
    image: "/Execs/Josh.jpg",
  },
  {
    name: "Karrie A. Langton",
    title: "Founder and CFO",
    image: "/Execs/Karrie.jpg",
  },
  {
    name: "Jonathon L. Frisbie",
    title: "Founder and CS",
    image: "/Execs/Jon.jpg",
  }
];

export default function FoundersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Branding/banner-1.jpg"
            alt="Founders Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 container mx-auto">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-6 drop-shadow-sm">
            Meet Our Founders
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The dedicated team driving XNet's mission to bridge the digital divide.
          </p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {founders.map((founder) => (
              <div key={founder.name} className="group flex flex-col items-center text-center">
                <div className="relative w-80 h-[450px] mb-8 rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/30">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="font-headline text-3xl font-bold text-foreground mb-2">{founder.name}</h2>
                <h3 className="text-xl font-medium text-primary">{founder.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
