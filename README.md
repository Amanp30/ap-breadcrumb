# ap-breadcrumb

A JavaScript utility for generating JSON-LD schema markup for breadcrumb navigation. This tool enhances SEO by providing structured data to search engines.

## Installation
To install the package, you can use npm:

```
npm install ap-breadcrumb
```
## Usage
To use ap-breadcrumb, simply import it and pass in either an array of breadcrumb objects or a URL. The function will return the corresponding JSON-LD schema.

### Example with Breadcrumb Data
```
const getBreadCrumbSchema = require('ap-breadcrumb');

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

const breadcrumbSchema = getBreadCrumbSchema(sampleBreadcrumbData);
console.log(JSON.stringify(breadcrumbSchema, null, 2));

```
### Example with URL
```
const getBreadCrumbSchema = require('ap-breadcrumb');

const url = 'https://example.com/category/item';
const breadcrumbSchema = getBreadCrumbSchema(url);
console.log(JSON.stringify(breadcrumbSchema, null, 2));
```
### Output
The output for both examples will be in the following format:
```
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": "https://example.com",
        "name": "Home"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": "https://example.com/category",
        "name": "Category"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@id": "https://example.com/category/item",
        "name": "Item"
      }
    }
  ]
}
```
