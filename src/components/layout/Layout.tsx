import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, Briefcase, User, Mail } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper component
 * Provides consistent header and footer across all pages
 * Homepage removes top padding to allow header overlay on hero
 */
export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === '/';

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Portfolio', url: '/portfolio', icon: Briefcase },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contact', url: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <NavBar items={navItems} />
      <main 
        id="main-content" 
        className={`flex-1 ${isHomepage ? 'pt-0' : 'pt-24'}`}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
