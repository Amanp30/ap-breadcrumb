const { removeFileExtension, isValidUrl, removeTrailingSlash, formatSegment } = require("./util");

// lib/getBreadCrumbSchema.js
module.exports = getBreadCrumbSchema;

function getBreadCrumbSchema(input) {
  if (typeof input === 'string' && isValidUrl(input)) {
    return buildJsonLdSchema(extractBreadcrumbItems(input));
  }

  if (Array.isArray(input)) {
    return buildJsonLdSchema(input);
  }

  return null;
}

function extractBreadcrumbItems(url) {
  const urlObject = new URL(url);
  const breadcrumbItems = [
    { name: 'Home', url: removeTrailingSlash(urlObject.origin) },
  ];

  const pathSegments = urlObject.pathname
    .replace(/\/index\.[a-zA-Z0-9]+$/g, '') // Remove /index.{ext} only
    .replace(/\/$/, '') // Remove trailing slash if it exists
    .split('/')
    .filter(Boolean); // Remove empty segments

  pathSegments.forEach((segment, index) => {
    const fullUrl = `${urlObject.origin}/${pathSegments
      .slice(0, index + 1)
      .join('/')}`; // Construct full URL

    breadcrumbItems.push({
      name: formatSegment(removeFileExtension(segment)), // Remove file extension from name
      url: fullUrl, // Keep the full URL with the extension
    });
  });

  return breadcrumbItems;
}

function buildJsonLdSchema(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': removeTrailingSlash(item.url),
        name: item.name,
      },
    })),
  };
}

