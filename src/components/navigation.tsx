'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#mission', label: 'Mission' },
  { href: '/#values', label: 'Values' },
  { href: '/#support', label: 'Support Us' },
  { href: '/articles', label: 'Articles' },
  { href: '/founders', label: 'Founders' },
  { href: '/#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 border-b sticky top-0 bg-background/80 backdrop-blur-sm z-20 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="border-b pb-4">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo />
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-headline text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
