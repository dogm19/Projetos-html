"use client"

import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground rounded-full animate-float"></div>
        <div
          className="absolute top-32 right-20 w-16 h-16 border border-primary-foreground rounded-lg rotate-45 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 border border-primary-foreground rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-18 h-18 border border-primary-foreground rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Transforme sua ideia em realidade com a <span className="text-accent">Império Maker!</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Não deixe suas ideias apenas na imaginação. Entre em contato conosco e descubra como podemos dar vida aos
            seus projetos com impressão 3D de qualidade profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5577998600597?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20vocês.", "_blank")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 animate-pulse-glow group"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://instagram.com/imperiomakervdc", "_blank")}
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 group"
            >
              <Instagram className="mr-2 w-5 h-5" />
              Seguir no Instagram
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Resposta</div>
              <div className="text-primary-foreground/90 text-sm">em até 2 horas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Orçamento</div>
              <div className="text-primary-foreground/90 text-sm">gratuito e rápido</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Entrega</div>
              <div className="text-primary-foreground/90 text-sm">em todo Brasil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
