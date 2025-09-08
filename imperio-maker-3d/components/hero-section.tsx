"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border border-accent rounded-full animate-float"></div>
        <div
          className="absolute top-20 sm:top-40 right-8 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 border border-primary rounded-lg rotate-45 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 sm:bottom-32 left-1/4 w-10 sm:w-20 h-10 sm:h-20 border border-accent rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-14 sm:w-28 h-14 sm:h-28 border border-primary rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              Impressão 3D Profissional
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-balance leading-tight font-bold mt-5">
            Dê vida às suas <span className="text-accent">ideias</span> com
            impressão <span className="text-primary">3D</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-2">
            Brindes, utilidades e personalizados feitos sob medida para você.
            Transformamos seus projetos em realidade com qualidade profissional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/5577998600597?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20vocês.",
                  "_blank"
                )
              }
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 animate-pulse-glow group w-full xs:w-auto"
            >
              <span className="hidden xs:inline">Faça já seu orçamento</span>
              <span className="xs:hidden">Faça já seu orçamento</span>
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-border text-foreground hover:bg-card text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full xs:w-auto"
            >
              Ver Serviços
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto px-2">
            <div className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card/50 rounded-lg border border-border">
              <Zap className="w-4 sm:w-6 h-4 sm:h-6 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                Entrega Rápida
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card/50 rounded-lg border border-border xs:col-span-2 lg:col-span-1">
              <Star className="w-4 sm:w-6 h-4 sm:h-6 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                Qualidade Premium
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card/50 rounded-lg border border-border xs:col-span-2 lg:col-span-1">
              <ArrowRight className="w-4 sm:w-6 h-4 sm:h-6 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                Preço Justo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
