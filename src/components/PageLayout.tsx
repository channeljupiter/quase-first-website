import { Link } from "react-router-dom";
import FooterNav from "./FooterNav";
import quase from "@/assets/quase.png";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`h-screen overflow-hidden bg-background ${className}`}>
      
      {/* OPAQUE HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 bg-background">
        <Link to="/" className="block">
          <img
            src={quase}
            alt="Quase"
            className="h-11 md:h-16 opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
      </header>

      {/* MAIN — NO PAGE SCROLL */}
      <main className="pt-20 pb-24 h-full overflow-hidden">
        {children}
      </main>

      <FooterNav />
    </div>
  );
};

export default PageLayout;