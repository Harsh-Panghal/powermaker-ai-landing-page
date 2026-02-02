import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

const PageBreadcrumb = ({ items, currentPage }: PageBreadcrumbProps) => {
  // Generate JSON-LD BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://powermakerai.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://powermakerai.com${item.href}`
      })),
      {
        "@type": "ListItem",
        "position": items.length + 2,
        "name": currentPage
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className="mb-6"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
              aria-label="Go to homepage"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" aria-hidden="true" />
              <Link 
                to={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
          
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">
              {currentPage}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default PageBreadcrumb;
