import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const allItems = [{ name: "Home", url: "https://ezuconstruction.ca/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="breadcrumb"
        className="relative z-10 flex items-center gap-2 text-sm text-white/50 px-4 md:px-10 pt-6 pb-2"
      >
        {allItems.map((item, index) => (
          <span key={item.url} className="flex items-center gap-2">
            {index < allItems.length - 1 ? (
              <>
                <Link href={item.url} className="hover:text-white transition">
                  {item.name}
                </Link>
                <span aria-hidden="true">/</span>
              </>
            ) : (
              <span className="text-white/80" aria-current="page">
                {item.name}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumb;
