import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
interface HeaderProps {
  brideFirstName: string;
  groomFirstName: string;
}
export const Header: React.FC<HeaderProps> = ({
  brideFirstName,
  groomFirstName
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  // Translate navigation items
  const navItems = [{
    id: 'home',
    label: 'Inicio'
  }, {
    id: 'details',
    label: 'Detalles'
  }, {
    id: 'about',
    label: 'Nosotros'
  }, {
    id: 'rsvp',
    label: 'Confirmar'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-black bg-opacity-30 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif text-rose-600 font-bold">
          {groomFirstName} & {brideFirstName}
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white hover:text-rose-400 transition-colors font-medium">
              {item.label}
            </button>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white hover:text-rose-400 transition-colors w-full text-center py-2 font-medium">
                {item.label}
              </button>)}
          </div>
        </div>}
    </header>;
};