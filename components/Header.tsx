"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from "next-themes"

export default function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          SaaSify
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-foreground hover:text-primary">Features</Link>
          <Link href="#pricing" className="text-foreground hover:text-primary">Pricing</Link>
          <Link href="#" className="text-foreground hover:text-primary">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="sr-only">Toggle theme</span>
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}