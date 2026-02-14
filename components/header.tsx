"use client";
import React, { useState, useEffect } from "react";

/* -------------------------------------------------------------------------- */
/*                               INTERNAL ICONS                               */
/* -------------------------------------------------------------------------- */
const ChevronDown = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

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

/* -------------------------------------------------------------------------- */
/*                                MAIN COMPONENT                              */
/* -------------------------------------------------------------------------- */

interface SubMenuItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  hasDropdown?: boolean;
  subMenu?: SubMenuItem[];
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    {
      name: "Programs",
      hasDropdown: true,
      subMenu: [
        { name: "Chess Coaching", href: "/chess" },
        { name: "Memory Mastery", href: "/memory" },
        { name: "Logical Reasoning", href: "/logic" },
        { name: "Coding & AI", href: "/coding" },
        { name: "Communication Skills", href: "/communication" },
        { name: "Problem Solving", href: "/problem-solving" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Spacer to prevent layout jump when header becomes fixed */}
      <div className="h-20 lg:h-24 invisible" />

      <header
        className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 ease-in-out ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md h-16 md:h-20" 
            : "bg-white h-20 md:h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative overflow-hidden">
              <img
                src="/future.png"
                alt="Future Mind Skills Academy"
                className={`transition-all duration-300 object-contain ${
                    scrolled ? "w-50 h-10 md:w-60 md:h-12" : "w-52 h-auto md:w-66 md:h-16"
                }`}
              />
            </div>
          </a>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 h-full">
            {navItems.map((item) => (
              <div key={item.name} className="relative group h-full flex items-center">
                {item.hasDropdown ? (
                  <button className="flex items-center gap-1.5 text-[15px] font-bold text-slate-700 group-hover:text-[#01539D] transition-colors">
                    {item.name}
                    <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-[15px] font-bold text-slate-700 hover:text-[#01539D] transition-colors"
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                      <div className="h-1.5 w-full bg-gradient-to-r from-[#01539D] to-[#46B94A]" />
                      {item.subMenu?.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3.5 text-sm font-semibold text-slate-600 hover:text-[#01539D] hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="/bookdemo"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-[#01539D] rounded-full hover:bg-[#01427a] hover:shadow-lg active:scale-95"
            >
              Enroll Now
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[200] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[350px] bg-white shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          
          <div className="p-5 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-2">
                <span className="font-bold text-[#01539D]">Menu</span>
            </div>
            <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left font-bold text-slate-700 py-2"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileSubMenuOpen === item.name ? "rotate-180 text-[#01539D]" : "text-slate-400"}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileSubMenuOpen === item.name ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}>
                        <div className="pl-4 space-y-1 border-l-2 border-[#46B94A]/30">
                          {item.subMenu?.map((sub) => (
                            <a 
                                key={sub.name} 
                                href={sub.href} 
                                className="block py-2.5 px-3 text-sm font-semibold text-slate-600 hover:text-[#01539D] hover:bg-slate-50 rounded-lg transition-colors"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a href={item.href} className="block py-2 font-bold text-slate-700 hover:text-[#01539D]">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-slate-100">
            <a href="/bookdemo" className="block w-full py-4 text-center text-white bg-[#01539D] font-bold rounded-xl shadow-lg hover:bg-[#01427a] transition-colors">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;