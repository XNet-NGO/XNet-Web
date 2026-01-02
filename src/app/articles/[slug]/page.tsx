
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/lib/articles-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  const renderContent = () => {
    return article.content.map((item, index) => {
      switch (item.type) {
        case 'h2':
          return <h2 key={index} className="font-headline text-3xl font-bold mt-8 mb-4 text-primary">{item.text}</h2>;
        case 'h3':
          return <h3 key={index} className="font-headline text-2xl font-bold mt-6 mb-3">{item.text}</h3>;
        case 'p':
          return <p key={index} className="mb-4 text-lg leading-relaxed">{item.text}</p>;
        case 'li':
            return <li key={index} className="mb-4 text-lg leading-relaxed ml-6">{item.text}</li>;
        default:
          return null;
      }
    });
  };

  return (
    <div className="flex flex-col">
      <main className="flex-grow pt-16">
        <article className="container mx-auto px-4 py-12 max-w-4xl bg-card/80 rounded-lg shadow-xl">
          <div className="mb-8">
            <Link href="/articles">
                <Button variant="outline">Back to Articles</Button>
            </Link>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-8">
            {article.title}
          </h1>
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={article.imageHint}
              priority
            />
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-muted-foreground">
            {renderContent()}
          </div>
        </article>
      </main>

      <footer className="py-6 px-4 md:px-8 border-t mt-auto bg-card/80">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} XNet. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
