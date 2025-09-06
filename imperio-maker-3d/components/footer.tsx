"use client";

import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo.svg"
                    alt="Império Maker Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Império Maker
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Impressão 3D Personalizada
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Transformamos suas ideias em realidade através da impressão 3D.
                Qualidade profissional, atendimento personalizado e preços
                justos.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Links Rápidos
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() =>
                    document
                      .getElementById("inicio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Início
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("sobre")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Sobre Nós
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("servicos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Serviços
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5577998600597?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20vocês.",
                      "_blank"
                    )
                  }
                  className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Orçamento
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contato</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5577998600597?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20vocês."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">(77) 9 9860-0597</span>
                </a>
                <a
                  href="mailto:contato@imperiomaker.com.br"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">contato@imperiomaker.com.br</span>
                </a>
                <a
                  href="https://instagram.com/imperiomakervdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">@imperiomakervdc</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Império Maker. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/imperiomakervdc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-accent-foreground group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
