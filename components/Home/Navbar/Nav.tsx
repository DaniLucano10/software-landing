"use client";
import ThemeToogler from "@/components/Helper/ThemeToogler";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`transition-all ${
        navBg ? "bg-blue-800 shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full bg-blue-700`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO (puedes envolverlo en <Link> si lleva a home) */}
        <Link href="/" className="flex items-center space-x-2" aria-label="Inicio">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <GrTechnology className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <span className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            TechParaTi
          </span>
        </Link>

        {/* NavLinks */}
        <ul className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.url}
                className={`text-gray-100 text-lg hover:text-white font-semibold transition-all duration-200 ${
                  pathname === link.url ? "underline" : ""
                }`}
                aria-current={pathname === link.url ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botones */}
        <div className="flex items-center space-x-4">
          {/* Botón Crear Cuenta (mejor con href real o cambia a <button>) */}
          <a
            href="/registro"
            role="button"
            aria-label="Crear una cuenta"
            className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full insert-0 absolute -mt-2.5 -ml-5.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">Crear una cuenta</span>
          </a>

          {/* Theme Toggler */}
          <ThemeToogler />

          {/* Burger Menu */}
          <button
            onClick={openNav}
            className="lg:hidden"
            aria-label="Abrir menú de navegación"
          >
            <HiBars3BottomRight className="w-8 h-8 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
