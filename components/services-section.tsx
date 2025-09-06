"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Printer, Palette, Gift, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Printer,
      title: "Impressão de Modelos Prontos",
      description: "Você já possui o arquivo 3D? Perfeito! Cobramos apenas pela impressão com qualidade profissional.",
      features: ["Arquivo STL/OBJ aceito", "Múltiplos materiais", "Acabamento premium", "Preço mais acessível"],
      highlight: "Mais Econômico",
    },
    {
      icon: Palette,
      title: "Modelagem 3D Personalizada",
      description: "Criamos seu modelo 3D do zero baseado na sua ideia, desenho ou referência.",
      features: ["Modelagem profissional", "Revisões incluídas", "Arquivo entregue", "Suporte técnico"],
      highlight: "Mais Criativo",
    },
    {
      icon: Gift,
      title: "Brindes e Utilidades",
      description: "Projetos especiais para brindes corporativos, utilidades domésticas e peças decorativas.",
      features: ["Design exclusivo", "Produção em lote", "Embalagem inclusa", "Logotipo personalizado"],
      highlight: "Mais Versátil",
    },
  ]

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4">
              Oferecemos soluções completas em impressão 3D, desde a criação do modelo até a entrega final. Escolha o
              serviço ideal para seu projeto.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full flex flex-col"
              >
                <CardHeader className="text-center pb-3 sm:pb-4 flex-shrink-0">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-accent-foreground" />
                  </div>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 sm:px-3 py-1 rounded-full mb-2">
                    {service.highlight}
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-foreground leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 flex-grow flex flex-col">
                  <p className="text-sm sm:text-base text-muted-foreground text-center flex-shrink-0">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-border hover:bg-accent hover:text-accent-foreground hover:border-accent group bg-transparent mt-auto text-xs sm:text-sm"
                    onClick={() => window.open("https://wa.me/5577998600597?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20vocês.", "_blank")}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Combo Offer */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                💡 Oferta Especial: Modelagem + Impressão
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto text-pretty">
                Contrate modelagem e impressão juntos e ganhe{" "}
                <span className="text-accent font-semibold">desconto na modelagem</span>. Solução completa do conceito
                ao produto final.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/5577998600597?", "_blank")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                Aproveitar Oferta
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
