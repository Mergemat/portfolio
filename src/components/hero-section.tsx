"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-background to-background bg-[length:400%_400%] bg-[position:0%_100%]">
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 animate-fade-in text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          FOUNDATION
        </h1>
        <p className="animation-delay-200 mb-8 animate-fade-in text-xl text-white sm:text-2xl md:text-3xl">
          Веб-дизайн на языке вашего бизнеса
        </p>
        <Button
          asChild
          size="lg"
          className="animation-delay-400 animate-fade-in px-8 py-3 text-lg"
        >
          <Link href="#projects">К работам</Link>
        </Button>
      </div>
    </section>
  );
}
