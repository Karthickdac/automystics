import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  const fullTitle = `${title} | Automystics`;
  const url = canonical ? `https://automystics.com${canonical}` : "https://automystics.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Automystics" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Automystics Technologies Private Limited",
          "legalName": "Automystics Technologies Private Limited",
          "alternateName": "Automystics",
          "url": "https://automystics.com",
          "logo": "https://automystics.com/logo.jpeg",
          "description": "An AI Automation Company delivering complex software solutions with unprecedented speed.",
        })}
      </script>
    </Helmet>
  );
}