import siteData from "@/content/site.json";

const TopBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-8 py-4 bg-background">
      <p className="text-xs font-body tracking-wide text-muted-foreground text-center max-w-3xl leading-relaxed">
        {siteData.topBanner}
      </p>
    </div>
  );
};

export default TopBanner;
