"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/layout/theme-toggle-button';
import { cn } from '@/lib/utils';
import { DuckIcon } from '@/components/icons/logo-icon'; // Placeholder, will create DuckIcon

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/adventure-log', label: 'Adventure Log' },
  { href: '/jukebox', label: 'QuackBox Jukebox' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <DuckIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg uppercase tracking-wider">CME Duck Adventures</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          {/* Mobile Menu Button (optional, for future enhancement) */}
          {/* <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" /> 
          </Button> */}
        </div>
      </div>
    </header>
  );
}
