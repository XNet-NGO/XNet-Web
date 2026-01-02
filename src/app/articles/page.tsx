
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/articles-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ArticlesPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow pt-16">
        <section id="articles" className="py-20 md:py-24 bg-background/80">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              Articles & Insights
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80">
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                      data-ai-hint={article.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl h-14">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground text-sm flex-grow">{article.excerpt}</p>
                    <Button asChild className="mt-4 w-full">
                      <Link href={`/articles/${article.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-8 border-t mt-auto bg-card/80">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} XNet. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
