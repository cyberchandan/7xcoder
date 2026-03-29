# Public Directory - SEO Files

## Overview

This directory contains critical files for search engine optimization and website accessibility.

## Files

### 1. robots.txt

The robots.txt file is a text file placed in the root directory of web server that tells search engine crawlers which pages they can access on the website.

**Location:** `robots.txt`
**Size:** ~668 bytes
**Purpose:** Guides search engine bots on crawling behavior

**What it does:**

- Allows Googlebot and Bingbot to crawl the entire site
- Prevents crawling of admin sections
- Blocks known bad bots (Ahrefs, Semrush, etc.)
- Specifies the sitemap location
- Sets crawl delay parameters

**Access:** https://visiomatix.onrender.com/robots.txt

---

### 2. sitemap.xml

The sitemap is an XML file that lists important URLs on the website to ensure Google can find and crawl all of your website's important pages.

**Location:** `sitemap.xml`
**Size:** ~5.7 KB
**Purpose:** Helps search engines discover and index all pages

**Includes:**

- 30+ main pages and service pages
- Priority levels for each page
- Change frequency information
- Last modified dates
- Organized by service categories

**Structure:**

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>URL of page</loc>
    <lastmod>Last modification date</lastmod>
    <changefreq>How often the page changes</changefreq>
    <priority>Priority 0.0-1.0</priority>
  </url>
</urlset>
```

**Access:** https://visiomatix.onrender.com/sitemap.xml

---

## Setup Instructions for Search Engines

### Google Search Console

1. Visit https://search.google.com/search-console
2. Add property: https://visiomatix.onrender.com
3. Verify ownership
4. Submit sitemap: https://visiomatix.onrender.com/sitemap.xml
5. Monitor crawl statistics

### Bing Webmaster Tools

1. Visit https://www.bing.com/webmasters/
2. Add site
3. Verify ownership
4. Submit sitemap: https://visiomatix.onrender.com/sitemap.xml
5. Monitor performance

---

## Important Notes

- **robots.txt Location:** This file must be in the root directory and be publicly accessible
- **Sitemap Location:** Can be anywhere, but typically in root or sitemap folder
- **Update Frequency:** Update sitemap.xml when adding new pages or services
- **Robots.txt Changes:** Update when hiding new sections from crawlers

---

## Testing

### Test robots.txt

```bash
curl https://visiomatix.onrender.com/robots.txt
```

### Test sitemap.xml

```bash
curl https://visiomatix.onrender.com/sitemap.xml
```

### Validate XML

Use Google's Rich Results Test:
https://search.google.com/test/rich-results

---

## Best Practices

1. **Keep robots.txt lean** - Changing robots.txt frequently can cause issues
2. **Update sitemap regularly** - When adding new pages, update the sitemap
3. **Monitor Search Console** - Check for crawl errors and issues
4. **Use disallow sparingly** - Don't block too many resources
5. **Allow JavaScript files** - For better rendering

---

## Common Issues

| Issue             | Solution                                |
| ----------------- | --------------------------------------- |
| Pages not indexed | Submit URL in Search Console            |
| Crawl errors      | Check robots.txt for blocking           |
| Duplicate content | Use canonical tags in HTML              |
| Slow crawling     | Increase crawl budget in Search Console |
| Missing pages     | Ensure all pages are in sitemap         |

---

## Maintenance

### Monthly

- Review Search Console for crawl errors
- Check sitemap validity
- Verify robots.txt accessibility

### Quarterly

- Audit robots.txt rules
- Update sitemap with new pages
- Review search performance data

---

## Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [Bing Webmaster Guidelines](https://www.bing.com/webmaster/help)
- [XML Sitemap Protocol](https://www.sitemaps.org/)
- [Robots.txt Specification](https://www.robotstxt.org/)

---

**Last Updated:** March 13, 2026
**Status:** Active
**Version:** 1.0
