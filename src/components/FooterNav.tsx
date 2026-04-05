import { Link } from "react-router-dom";
import siteData from "@/content/site.json";

const FooterNav = () => {
  return (
    <footer className="flex items-center justify-center gap-16 py-8 px-8">
      {siteData.navigation.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-xs font-body tracking-[0.25em] uppercase text-foreground hover:text-muted-foreground transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </footer>
  );
};

export default FooterNav;
