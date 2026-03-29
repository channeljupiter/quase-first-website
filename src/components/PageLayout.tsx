import { Link } from "react-router-dom";
import FooterNav from "./FooterNav";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 bg-background/80 backdrop-blur-sm">
        <Link to="/" className="font-display text-2xl tracking-wide text-foreground">
          Quase
        </Link>
      </header>
      <main className="pt-20 pb-24">
        {children}
      </main>
      <FooterNav />
    </div>
  );
};

export default PageLayout;
