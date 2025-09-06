"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Palette, Gift } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Sobre a <span className="text-accent">Império Maker</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Somos especialistas em impressão 3D personalizada, transformando suas ideias em realidade com tecnologia
              de ponta e atendimento personalizado.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Como trabalhamos com você</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Já possui o modelo?</h4>
                    <p className="text-muted-foreground">
                      Se você já tem o arquivo 3D pronto, cobramos apenas pela impressão. Processo rápido e preço mais
                      acessível.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Palette className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Precisa de modelagem?</h4>
                    <p className="text-muted-foreground">
                      Criamos o modelo 3D do zero baseado na sua ideia.
                      <span className="text-accent font-medium"> Desconto especial</span> quando você contrata modelagem
                      + impressão juntos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Gift className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Projetos personalizados</h4>
                    <p className="text-muted-foreground">
                      Brindes corporativos, utilidades domésticas, peças decorativas e muito mais. Cada projeto é único
                      e feito especialmente para você.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">500+</h4>
                  <p className="text-sm text-muted-foreground">Projetos Realizados</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">48h</h4>
                  <p className="text-sm text-muted-foreground">Entrega Média</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">100%</h4>
                  <p className="text-sm text-muted-foreground">Personalizado</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">5★</h4>
                  <p className="text-sm text-muted-foreground">Avaliação Média</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
