"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-200`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
              <Image
                src="/logo.svg"
                alt="Império Maker Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Império Maker
              </h1>
              <p className="text-xs text-gray-600 hidden xs:block">
                Impressão 3D
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-accent transition-colors text-sm xl:text-base"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-accent transition-colors text-sm xl:text-base"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-accent transition-colors text-sm xl:text-base"
            >
              Serviços
            </button>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5577998600597?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20vocês.",
                  "_blank"
                )
              }
              className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-glow text-sm xl:text-base px-4 xl:px-6"
            >
              Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-gray-200 pt-3 sm:pt-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-accent transition-colors text-left py-1 text-sm sm:text-base"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-700 hover:text-accent transition-colors text-left py-1 text-sm sm:text-base"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-700 hover:text-accent transition-colors text-left py-1 text-sm sm:text-base"
              >
                Serviços
              </button>
              <Button
                onClick={() =>
                  window.open("https://wa.me/5577998600597?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20vocês.", "_blank")
                }
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-2 text-sm sm:text-base"
              >
                Faça seu Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
