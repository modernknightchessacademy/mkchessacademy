"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModernKnightLogo } from "@/components/logo";

const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Coaches", href: "/coaches" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  if (pathname.startsWith("/admin") || pathname.startsWith("/student")) {
    return null;
  }

  return (
    <>
      {/* Top Spacer */}
      <div className="h-20 lg:h-21 invisible" />

      {/* Main Header Container */}
      <header
        className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 ease-in-out ${
          scrolled ? "pt-2 px-2 md:px-8" : "bg-white border-b border-slate-100 py-2"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? "max-w-8xl bg-slate-200/90 backdrop-blur-xl border border-white/60 shadow-2xl rounded-full px-4 py-2"
              : "max-w-8xl px-4 md:px-8"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-1.5 group shrink-0">
            {/* Show smaller logo on mobile, normal on desktop */}
            <div className="block md:hidden">
              <ModernKnightLogo size="xs" />
            </div>
            <div className="hidden md:block">
              <ModernKnightLogo size={scrolled ? "md" : "md"} />
            </div>
          </Link>

          {/* Desktop Navigation - Balanced Perfectly Proportionate Text (14px) */}
          <nav
            className={`hidden xl:flex items-center transition-all duration-300 ${
              scrolled
                ? "bg-white/90 backdrop-blur-md rounded-full px-3 py-1 border border-slate-300/60 shadow-inner gap-1"
                : "gap-6"
            }`}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all text-[14px] font-extrabold ${
                    scrolled
                      ? isActive
                        ? "bg-white text-[#0B4398] rounded-full px-4 py-1.5 shadow-md border border-slate-200"
                        : "text-slate-700 hover:text-[#0B4398] px-3.5 py-1.5 hover:bg-slate-100/80 rounded-full"
                      : isActive
                      ? "text-[#0B4398] font-black border-b-2 border-[#0B4398] pb-1"
                      : "text-slate-700 hover:text-[#0B4398] py-1"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/student"
              className="text-xs font-extrabold px-3.5 py-2 rounded-full bg-white text-slate-800 hover:bg-[#0B4398] hover:text-white transition-all flex items-center gap-1 border border-slate-200 shadow-sm"
            >
              <span>♟</span> Student Portal
            </Link>

            <Link
              href="/admin"
              className="text-xs font-extrabold px-3.5 py-2 rounded-full bg-white text-slate-800 hover:bg-slate-900 hover:text-white transition-all flex items-center gap-1 border border-slate-200 shadow-sm"
            >
              <span>⚙️</span> Admin
            </Link>

            <Link
              href="/bookdemo"
              className="text-xs font-black px-5 py-2.5 rounded-full bg-[#0B4398] hover:bg-blue-900 text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>👑</span> Book Trial Class
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-1.5">
            <Link
              href="/bookdemo"
              className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-[#0B4398] text-white shrink-0 hover:bg-blue-900 transition-colors"
            >
              Book Trial
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-700 hover:bg-slate-200/60 shrink-0"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-5.5 h-5.5" /> : <MenuIcon className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-4 top-24 z-[110] bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xl max-h-[75vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-extrabold py-2.5 px-4 rounded-xl transition-all ${
                      isActive ? "bg-slate-100 text-[#0B4398]" : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="h-px bg-slate-100 my-2" />
              <Link
                href="/bookdemo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-extrabold text-white bg-[#0B4398] hover:bg-blue-900 py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-md"
              >
                👑 Book Trial Class
              </Link>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link
                  href="/student"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold text-slate-800 bg-white border border-slate-200 py-2.5 px-3 rounded-xl text-center hover:bg-slate-50 flex items-center justify-center gap-1"
                >
                  ♟ Portal
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold text-slate-850 bg-white border border-slate-200 py-2.5 px-3 rounded-xl text-center hover:bg-slate-50 flex items-center justify-center gap-1"
                >
                  ⚙️ Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;