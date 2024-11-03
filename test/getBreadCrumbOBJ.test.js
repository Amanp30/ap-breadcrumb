/* eslint-disable no-undef */
// test/getBreadCrumbSchema.test.js
const getBreadCrumbSchema = require('../lib'); // Import the correct function

// Expected JSON-LD objects for assertions
const expectedBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': 'https://example.com',
        name: 'Home',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': 'https://example.com/category',
        name: 'Category',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@id': 'https://example.com/category/item',
        name: 'Item',
      },
    },
  ],
};

// Sample breadcrumb data for testing
const sampleBreadcrumbData = [
  {
    name: 'Home',
    url: 'https://example.com/',
  },
  {
    name: 'Category',
    url: 'https://example.com/category',
  },
  {
    name: 'Item',
    url: 'https://example.com/category/item',
  },
];

// Additional test cases
const expectedBreadcrumbWithDashes = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': 'https://example.com',
        name: 'Home',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': 'https://example.com/phone',
        name: 'Phone',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@id': 'https://example.com/phone/samsung-m30-pro.html',
        name: 'Samsung M30 Pro',
      },
    },
  ],
};

const expectedBreadcrumbWithIndexExtension = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': 'https://example.com',
        name: 'Home',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': 'https://example.com/smart-phone',
        name: 'Smart Phone',
      },
    },
  ],
};

const expectedBreadcrumbWithUnderscores = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': 'https://example.com',
        name: 'Home',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': 'https://example.com/product_category',
        name: 'Product Category', // Name should be formatted correctly
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@id': 'https://example.com/product_category/special_item',
        name: 'Special Item', // Name should be formatted correctly
      },
    },
  ],
};

// URLs to test against
const urlWithBreadcrumbData = 'https://example.com/category/item';
const urlWithDashes = 'https://example.com/phone/samsung-m30-pro.html';
const urlWithIndexExtension = 'https://example.com/smart-phone/index.php';
const urlWithUnderscores = 'https://example.com/product_category/special_item';

describe('getBreadCrumbSchema', () => {
  it('should generate a valid JSON-LD schema from breadcrumb data', () => {
    const result = getBreadCrumbSchema(sampleBreadcrumbData);
    expect(result).toEqual(expectedBreadcrumbSchema);
  });

  it('should generate a valid JSON-LD schema from a webpage URL', () => {
    const result = getBreadCrumbSchema(urlWithBreadcrumbData);
    expect(result).toEqual(expectedBreadcrumbSchema);
  });

  it('should generate a valid JSON-LD schema for a URL with dashes', () => {
    const result = getBreadCrumbSchema(urlWithDashes);
    expect(result).toEqual(expectedBreadcrumbWithDashes);
  });

  it('should generate a valid JSON-LD schema for a URL with index extensions', () => {
    const result = getBreadCrumbSchema(urlWithIndexExtension);
    expect(result).toEqual(expectedBreadcrumbWithIndexExtension);
  });

   it('should generate a valid JSON-LD schema for a URL with underscores', () => {
     const result = getBreadCrumbSchema(urlWithUnderscores);
     expect(result).toEqual(expectedBreadcrumbWithUnderscores);
   });
});
