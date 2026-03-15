# Local SEO Implementation Guide - LifeCore

## Table of Contents
1. [Overview](#overview)
2. [NAP Consistency](#nap-consistency)
3. [Structured Data Implementation](#structured-data-implementation)
4. [Google Business Profile Setup](#google-business-profile-setup)
5. [Location-Specific Content](#location-specific-content)
6. [Citation Building](#citation-building)
7. [Local Link Building](#local-link-building)
8. [Technical Implementation](#technical-implementation)
9. [Monitoring & Analytics](#monitoring--analytics)

---

## Overview

This guide provides comprehensive instructions for implementing local SEO elements to improve visibility in local search results for București and surrounding areas.

### Key Benefits of Local SEO:
- Appear in "near me" searches
- Show up in Google Maps results
- Rank higher for location-specific queries
- Build trust with local customers
- Increase foot traffic (if applicable)

---

## NAP Consistency

### What is NAP?
NAP stands for **Name, Address, Phone** - the three critical pieces of information that must be **exactly identical** across all online platforms.

### Current NAP Details

```
Name: LifeCore - Planificare Financiară
Address: Strada Pictor Barbu Iscovescu, Nr. 24A, București, 011937, România
Phone: +40 749 149 789
Email: contact@lifecore.ro
```

### ⚠️ CRITICAL: Update NAP Data

**ACTION REQUIRED:** Update the NAP information in `/src/components/seo/NAP.tsx` with your actual business details:

```typescript
export const NAP_DATA = {
  businessName: "LifeCore - Planificare Financiară",
  address: {
    street: "Strada Pictor Barbu Iscovescu, Nr. 24A",
    city: "București",
    region: "București",
    postalCode: "011937",
    country: "România"
  },
  phone: "+40 749 149 789", // Use exact format everywhere
  email: "contact@lifecore.ro",
  hours: {
    weekdays: "Luni - Vineri: 09:00 - 18:00",
    weekend: "Sâmbătă - Duminică: Închis"
  }
};
```

### NAP Component Usage

The NAP component has 4 variants for different use cases:

#### 1. Full Variant (Contact Pages)
```tsx
import NAP from './components/seo/NAP';

<NAP variant="full" showIcons={true} />
```

#### 2. Footer Variant
```tsx
<NAP variant="footer" showIcons={true} />
```

#### 3. Compact Variant (Sidebars)
```tsx
<NAP variant="compact" />
```

#### 4. Inline Variant (Headers)
```tsx
<NAP variant="inline" />
```

### NAP Consistency Checklist

Ensure NAP is identical on:
- [x] Your website (all pages)
- [ ] Google Business Profile
- [ ] Facebook Business Page
- [ ] LinkedIn Company Page
- [ ] Instagram Business Profile
- [ ] Local directories (see [Citation Building](#citation-building))

---

## Structured Data Implementation

### 1. LocalBusiness Schema

The `LocalBusinessSchema` component is already created. Add it to your main layout or homepage:

```tsx
import LocalBusinessSchema from './components/seo/LocalBusinessSchema';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <LocalBusinessSchema />
      {/* Your app content */}
    </HelmetProvider>
  );
}
```

### 2. Service-Specific Schema

For each service page, add structured data:

```tsx
import { Helmet } from 'react-helmet-async';
import { generateServiceSchema } from '../utils/localSEO';

const serviceSchema = generateServiceSchema({
  name: "Planificare Pensie",
  description: "Consultanță profesionistă pentru planificarea pensiei private",
  url: "/retragere-activitate",
  areaServed: ["București", "Ilfov", "Sector 1", "Sector 2"]
});

<Helmet>
  <script type="application/ld+json">
    {JSON.stringify(serviceSchema)}
  </script>
</Helmet>
```

### 3. Breadcrumb Schema

Already implemented in the Breadcrumbs component with Schema.org markup.

### 4. FAQ Schema

For pages with FAQs:

```tsx
import { generateFAQSchema } from '../utils/localSEO';

const faqSchema = generateFAQSchema([
  {
    question: "Cât costă consultanța financiară în București?",
    answer: "Oferim consultanță personalizată cu prețuri transparente..."
  },
  {
    question: "Deservim clienți din afara Bucureștiului?",
    answer: "Da, oferim consultanță online pentru toată România..."
  }
]);
```

### Testing Structured Data

Use these tools to validate:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor structured data errors

---

## Google Business Profile Setup

### Initial Setup Steps

1. **Create/Claim Your Business**
   - Go to: https://www.google.com/business/
   - Sign in with your Google account
   - Search for your business or create new listing
   - Verify ownership (postcard, phone, or email)

2. **Complete Your Profile 100%**

#### Business Information
```
Business Name: LifeCore - Planificare Financiară
Category: Financial Consultant (Primary)
Additional Categories:
  - Financial Planning Consultant
  - Investment Service
  - Insurance Broker

Address: [Your exact address - must match NAP]
Service Area: București, Ilfov, Sector 1, Sector 2, Sector 3
Phone: [Exact NAP phone number]
Website: https://lifecore.ro
```

#### Business Hours
```
Monday:    09:00 - 18:00
Tuesday:   09:00 - 18:00
Wednesday: 09:00 - 18:00
Thursday:  09:00 - 18:00
Friday:    09:00 - 18:00
Saturday:  Closed
Sunday:    Closed
```

#### Business Description (750 characters max)
```
LifeCore oferă consultanță financiară profesionistă în București pentru planificarea pensiei, investiții, asigurări și educație financiară. Echipa noastră de experți te ajută să îți construiești un plan financiar personalizat bazat pe Piramida Bogăției. Servicii: planificare pensie privată, consultanță investiții, asigurări de viață și sănătate, planificare financiară pentru copii, consultanță credite ipotecare. Folosim calculatoare avansate pentru simulări realiste. Deservim București, Ilfov și zona metropolitană. Consultanță față în față sau online. Programează o întâlnire gratuită pentru a-ți evalua situația financiară.
```

3. **Add Photos & Videos**

Required photos:
- **Logo** (square, minimum 720x720px)
- **Cover Photo** (landscape, 1024x576px)
- **Interior Photos** (if you have an office)
- **Team Photos** (professional headshots)
- **Work Photos** (consultations, workshops - with client permission)

Best Practices:
- Upload at least 10 high-quality photos
- Add new photos monthly
- Use photos with people (increases engagement by 42%)
- Add captions with location keywords

4. **Services Section**

Add each service with description:

```
Service: Planificare Pensie
Description: Consultanță personalizată pentru construirea unui plan de pensie privată. Calculăm cât trebuie să economisești lunar pentru o pensie confortabilă.
Price: Contact pentru detalii

Service: Consultanță Investiții
Description: Strategii de investiții pe termen lung adaptate profilului tău de risc. Portfolio diversificat pentru maximizarea randamentului.
Price: Contact pentru detalii

Service: Plan Financiar Copil
Description: Planificare financiară pentru educația copilului tău. Calcule și strategii pentru acumularea sumelor necesare.
Price: Contact pentru detalii
```

5. **Attributes**

Select all applicable:
- ✓ Online appointments
- ✓ Free consultation
- ✓ Language: Romanian, English
- ✓ LGBTQ+ friendly
- ✓ Women-led (if applicable)

6. **Q&A Section**

Proactively add and answer common questions:

```
Q: Oferți consultanță gratuită pentru prima întâlnire?
A: Da, prima consultanță de evaluare este gratuită. Programează o întâlnire la +40 XXX XXX XXX.

Q: Deservim clienți din afara Bucureștiului?
A: Da, oferim consultanță online pentru toată România prin videocall.

Q: Cât costă serviciile de planificare financiară?
A: Tarifele sunt personalizate în funcție de complexitatea situației tale. Contactează-ne pentru o ofertă.
```

### Google Posts Strategy

Post weekly updates (minimum):

**Post Types:**
1. **Service Updates** (Weekly)
   - "Consultanță gratuită pentru planificarea pensiei. Află cât trebuie să economisești lunar!"
   - CTA: "Programează întâlnire"

2. **Educational Content** (2x/week)
   - "Știai că poți economisi 30% din credit prin plată anticipată?"
   - Link to calculator page

3. **Offers** (Monthly)
   - "Consultanță gratuită în luna martie!"

4. **Events** (As applicable)
   - "Webinar gratuit: Investiții pentru pensie"

### Review Management

**Critical for Local SEO:**

1. **Request Reviews Systematically**
   - Ask every satisfied client
   - Send email with direct review link
   - Use QR code in office
   - Follow up 1 week after consultation

2. **Respond to ALL Reviews**
   - Thank positive reviewers within 24 hours
   - Address concerns in negative reviews professionally
   - Include location keywords in responses

**Review Response Template (Positive):**
```
Mulțumim pentru review, [Name]! Suntem bucuroși că am putut să vă ajutăm cu planificarea pensiei. Echipa LifeCore din București este întotdeauna disponibilă pentru consultanță financiară personalizată. Vă dorim mult succes!
```

**Review Response Template (Negative):**
```
Îmi pare rău pentru experiența dvs., [Name]. La LifeCore din București, calitatea consultanței financiare este prioritatea noastră. Vă rog să ne contactați la [phone] pentru a rezolva situația. Mulțumim pentru feedback.
```

3. **Target Metrics**
   - Minimum 4.5 star average
   - 50+ reviews in first year
   - 90%+ response rate
   - <24 hour response time

### Google Business Profile - Advanced Features

#### 1. Messaging
- Enable messaging in GBP dashboard
- Respond within 24 hours
- Use saved replies for common questions

#### 2. Booking Button
- Integrate with calendar system
- Link to contact page with form
- Or use external booking tools (Calendly, etc.)

#### 3. Products
- Add financial planning packages as "products"
- Include descriptions and pricing (if applicable)
- Add high-quality images

---

## Location-Specific Content

### Location Pages Strategy

Create dedicated content for each service area:

#### București - Sector-Specific Pages (Optional)

1. `/planificare-financiara-sector-1`
2. `/planificare-financiara-sector-2`
3. `/consultanta-financiara-bucuresti-nord`

**Template Structure:**
```tsx
<h1>Planificare Financiară în Sector 1, București</h1>

<p>
  LifeCore oferă consultanță financiară personalizată pentru rezidenții din
  Sector 1, București. Serviciile noastre includ planificare pensie,
  investiții și asigurări.
</p>

<h2>De ce să alegi LifeCore în Sector 1?</h2>
<ul>
  <li>Echipă de experți cu experiență în București</li>
  <li>Consultanță la birou sau online</li>
  <li>Înțelegem piața locală din Sector 1</li>
</ul>

<h2>Servicii disponibile în Sector 1</h2>
[List services with local context]

<h2>Programează o consultanță în Sector 1</h2>
[Contact form or CTA]
```

### Location-Specific Content Elements

1. **Embed Google Maps**
```tsx
<iframe
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR_ADDRESS"
></iframe>
```

2. **Service Area Map**
Create visual representation of areas served

3. **Local Testimonials**
```tsx
<blockquote>
  "Cea mai bună consultanță financiară din București! M-au ajutat să îmi
  planific pensia." - Maria P., Sector 3
</blockquote>
```

4. **Local Statistics**
```tsx
<div>
  <h3>Clienți serviți în București</h3>
  <p>500+ familii din București și Ilfov</p>
  <p>200+ planuri de pensie create</p>
  <p>4.9/5 rating mediu</p>
</div>
```

### Content Optimization for Local Keywords

**Target Keywords by Priority:**

**Tier 1 (High Volume):**
- planificare financiară București
- consultanță financiară București
- consultant financiar București
- planificare pensie București

**Tier 2 (Medium Volume):**
- plan financiar București
- consultanță investiții București
- asigurări viață București
- planificare pensie privată București

**Tier 3 (Long-tail):**
- consultant financiar independent București
- planificare financiară personalizată București sector 1
- cum să îmi planific pensia în București
- cel mai bun consultant financiar București

**Tier 4 ("Near Me"):**
- consultant financiar aproape de mine
- planificare financiară în zona mea
- consultanță financiară lângă mine

### Content Implementation Example

```tsx
import LocalSEOHead from './components/seo/LocalSEOHead';
import NAP from './components/seo/NAP';
import { LOCAL_SEO_CONFIGS } from './utils/localSEO';

function RetragereActivitate() {
  return (
    <>
      <LocalSEOHead
        {...LOCAL_SEO_CONFIGS.retragereActivitate}
        canonicalUrl="/retragere-activitate"
      />

      <article>
        <h1>Planificare Pensie București - Consultanță Retragere din Activitate</h1>

        <p>
          LifeCore oferă consultanță specializată pentru planificarea pensiei
          private în București și Ilfov. Echipa noastră de experți financiari
          te ajută să construiești un plan personalizat pentru o pensie
          confortabilă.
        </p>

        {/* Main content */}

        <section className="bg-gray-50 p-8 rounded-xl my-8">
          <h2>Programează o consultanță în București</h2>
          <NAP variant="full" />
        </section>
      </article>
    </>
  );
}
```

---

## Citation Building

### What are Citations?

Citations are online mentions of your NAP information. They help Google verify your business legitimacy and improve local rankings.

### Citation Sources - Romania

#### Essential Citations (Must Have)

1. **Google Business Profile** ⭐ Most Important
   - https://www.google.com/business/

2. **Facebook Business Page**
   - https://www.facebook.com/business
   - Ensure NAP in "About" section matches exactly

3. **Bing Places**
   - https://www.bingplaces.com/

4. **Apple Maps Connect**
   - https://mapsconnect.apple.com/

#### Romanian Business Directories

5. **Pagini Aurii (Yellow Pages Romania)**
   - https://www.paginaaurii.ro/

6. **InfoBel Romania**
   - https://www.infobel.com/ro/romania/

7. **ListaFirme.ro**
   - https://www.listafirme.ro/

8. **Cylex România**
   - https://www.cylex.ro/

9. **Tuugo România**
   - https://www.tuugo.ro/

10. **Hotfrog România**
    - https://www.hotfrog.ro/

#### Industry-Specific Directories

11. **LinkedIn Company Page**
    - Critical for B2B services

12. **Trustpilot**
    - https://ro.trustpilot.com/

13. **Financial Services Directories**
    - Professional associations
    - Industry-specific platforms

### Citation Building Process

#### Step 1: Prepare Citation Information

Create a document with:
```
Business Name: LifeCore - Planificare Financiară
Address: [Exact address]
City: București
Region: București
Postal Code: [Code]
Country: România
Phone: +40 XXX XXX XXX
Email: contact@lifecore.ro
Website: https://lifecore.ro
Description: [Short + Long versions]
Categories: Financial Consultant, Financial Planning, Investment Advisory
Logo: [URL to logo file]
Hours: Luni-Vineri 09:00-18:00
```

#### Step 2: Submit to Each Directory

For each directory:
1. Create business listing
2. Use **exact** NAP information
3. Choose appropriate categories
4. Add description with local keywords
5. Upload logo and photos
6. Add website URL
7. Verify listing (if required)

#### Step 3: Track Citations

Use spreadsheet to track:
| Directory | Date Added | Status | URL | Notes |
|-----------|-----------|--------|-----|-------|
| Google Business | 2026-03-02 | Active | URL | Verified |
| Facebook | 2026-03-02 | Active | URL | - |

#### Step 4: Audit & Clean Up

Quarterly:
1. Search Google for: `"LifeCore" "București" -site:lifecore.ro`
2. Find all citations
3. Update outdated information
4. Remove duplicate listings
5. Request removal of incorrect citations

### Citation Quality Factors

**High-Quality Citations:**
- Established, authoritative directories
- Relevant to your industry
- Allow dofollow links
- Have high domain authority
- Romania-specific

**Low-Quality Citations:**
- Spam directories
- Irrelevant categories
- Nofollow only sites
- Low/no domain authority

---

## Local Link Building

### Link Building Strategies for București

#### 1. Local Partnerships

Partner with complementary businesses:
- **Real Estate Agencies** → Cross-referral for mortgage consulting
- **Accounting Firms** → Financial planning referrals
- **Law Offices** → Estate planning connections
- **Insurance Brokers** → Comprehensive financial services

Action: Offer to write guest posts or collaborate on content.

#### 2. Local Media & PR

Target București media outlets:
- **Local News Sites**
  - Ziare.com București section
  - Adevărul București
  - Local online publications

- **Press Releases**
  - Launch new service
  - Community involvement
  - Expert commentary on financial topics

Template:
```
"Companie din București Lansează Calculator Gratuit pentru Planificarea Pensiei"

București, [Date] - LifeCore, consultant financiar cu sediul în București,
a lansat un nou calculator online gratuit care ajută bucureștenii să își
planifice pensia privată...
```

#### 3. Local Sponsorships & Events

- Sponsor local events (charity runs, community festivals)
- Host free financial literacy workshops
- Participate in business networking events (BNI, AmCham)

Each sponsorship = potential link + brand awareness

#### 4. Educational Institutions

- Partner with universities for guest lectures
- Offer internships
- Sponsor student financial literacy programs

Target: ASE București (Academia de Studii Economice)

#### 5. Local Business Associations

Join and participate:
- **Camera de Comerț București**
- **American Chamber of Commerce Romania**
- **Local business networking groups**

Benefits: Directory listing + networking + links

#### 6. Content Marketing for Links

Create linkable assets:
- **Financial Planning Guide for Romanians** (comprehensive PDF)
- **București Cost of Living Calculator**
- **Annual Financial Report** (market insights)
- **Infographics** about pension system in Romania

Promote to:
- Financial blogs
- Local news sites
- Industry publications

#### 7. Local Resource Pages

Find "resources" or "links" pages on:
- Local government websites
- Business associations
- Industry directories
- Educational institutions

Reach out requesting inclusion.

---

## Technical Implementation

### Prerequisites

Install react-helmet-async for SEO meta tags:

```bash
npm install react-helmet-async
```

### 1. Wrap App with HelmetProvider

Update `src/main.tsx`:

```tsx
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
```

### 2. Add LocalBusinessSchema to Layout

Update `src/App.tsx`:

```tsx
import LocalBusinessSchema from './components/seo/LocalBusinessSchema';

function App() {
  return (
    <Router>
      <LocalBusinessSchema />
      {/* Rest of app */}
    </Router>
  );
}
```

### 3. Add NAP to Footer

Update `src/components/Footer.tsx`:

```tsx
import NAP from './seo/NAP';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <NAP variant="footer" />
        </div>
        {/* Other footer columns */}
      </div>
    </footer>
  );
}
```

### 4. Add SEO Head to Each Page

Example for service page:

```tsx
import LocalSEOHead from '../components/seo/LocalSEOHead';
import { LOCAL_SEO_CONFIGS } from '../utils/localSEO';

function RetragereActivitate() {
  return (
    <>
      <LocalSEOHead
        {...LOCAL_SEO_CONFIGS.retragereActivitate}
        canonicalUrl="/retragere-activitate"
      />
      {/* Page content */}
    </>
  );
}
```

### 5. robots.txt Configuration

Create `/public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://lifecore.ro/sitemap.xml

# Crawl-delay for good behavior
Crawl-delay: 0.5
```

### 6. Sitemap.xml

Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lifecore.ro/</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lifecore.ro/retragere-activitate</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

### 7. Add Geo Meta Tags Site-Wide

Already included in LocalSEOHead component:
```html
<meta name="geo.region" content="RO-București" />
<meta name="geo.placename" content="București" />
<meta name="geo.position" content="44.4268;26.1025" />
<meta name="ICBM" content="44.4268, 26.1025" />
```

---

## Monitoring & Analytics

### Google Search Console Setup

1. **Add Property**
   - Go to: https://search.google.com/search-console
   - Add property: https://lifecore.ro
   - Verify via DNS or HTML file

2. **Submit Sitemap**
   - In Search Console → Sitemaps
   - Submit: https://lifecore.ro/sitemap.xml

3. **Monitor Local Queries**
   - Performance → Search Results
   - Filter by queries containing "București"
   - Track impressions, clicks, CTR, position

4. **Track Structured Data**
   - Enhancements → Structured Data
   - Monitor LocalBusiness, Service, Breadcrumb markup
   - Fix any errors immediately

### Google Analytics 4 Setup

Track local performance:

1. **Custom Dimensions**
   - Service Area (București, Ilfov, etc.)
   - Referral Source (Google Maps, GBP, etc.)

2. **Events to Track**
   - Phone click (NAP component)
   - Email click
   - Map click ("Vezi pe hartă")
   - Direction requests
   - Contact form submissions

3. **Goals/Conversions**
   - Contact form submission
   - Phone call
   - Calendar booking
   - Calculator usage

### Key Metrics to Monitor

#### Local Search Performance
- **Local Pack Rankings** (top 3 in maps)
  - Tool: Local Falcon, BrightLocal
  - Track weekly for target keywords

- **Google Business Profile Insights**
  - Views (Search vs Maps)
  - Actions (Website clicks, direction requests, calls)
  - Photos views
  - Search queries

- **Organic Local Rankings**
  - "planificare financiară bucurești"
  - "consultant financiar bucurești"
  - "planificare pensie bucurești"

#### Citation Metrics
- Number of citations
- NAP consistency score
- Citation quality score

#### Review Metrics
- Total reviews
- Average rating
- Review velocity (new reviews/month)
- Response rate
- Response time

### Reporting Dashboard

Create monthly report tracking:

```
LOCAL SEO MONTHLY REPORT - [Month Year]

1. RANKINGS
   - Google Maps position: [Top 3/Top 5/etc]
   - Organic rankings (București keywords): [Average position]

2. GOOGLE BUSINESS PROFILE
   - Profile views: [X] (Search: X, Maps: X)
   - Website clicks: [X]
   - Direction requests: [X]
   - Phone calls: [X]
   - New reviews: [X]
   - Average rating: [X.X]

3. WEBSITE TRAFFIC
   - Organic sessions: [X]
   - București organic traffic: [X]
   - Local keyword impressions: [X]
   - Local keyword clicks: [X]

4. CITATIONS
   - Total citations: [X]
   - New citations added: [X]
   - NAP issues fixed: [X]

5. CONVERSIONS
   - Contact form: [X]
   - Phone calls: [X]
   - Calculator usage: [X]

6. ACTIONS FOR NEXT MONTH
   - [ ] Task 1
   - [ ] Task 2
```

---

## Implementation Checklist

### Week 1: Foundation
- [x] Install react-helmet-async
- [ ] Update NAP_DATA with actual information
- [ ] Add HelmetProvider to app
- [ ] Add LocalBusinessSchema to layout
- [ ] Update contact coordinates (lat/long)

### Week 2: On-Page SEO
- [ ] Add NAP component to footer
- [ ] Add LocalSEOHead to all pages
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Test structured data with Google Rich Results Test

### Week 3: Google Business Profile
- [ ] Create/claim Google Business Profile
- [ ] Complete 100% of profile fields
- [ ] Upload 10+ photos
- [ ] Add all services
- [ ] Enable messaging
- [ ] Create first 3 Google Posts

### Week 4: Citations
- [ ] Submit to Google Business Profile
- [ ] Create Facebook Business Page
- [ ] Submit to Bing Places
- [ ] Submit to 5 Romanian directories
- [ ] Create citation tracking spreadsheet

### Month 2: Content & Reviews
- [ ] Add location-specific content to key pages
- [ ] Request reviews from 10 clients
- [ ] Respond to all reviews
- [ ] Create 2 location-specific blog posts
- [ ] Submit to 10 more directories

### Month 3: Link Building
- [ ] Reach out to 5 local partnership opportunities
- [ ] Guest post on 2 local blogs
- [ ] Join 2 local business associations
- [ ] Create linkable asset (guide/calculator)
- [ ] Submit press release to local media

### Ongoing
- [ ] Weekly Google Posts
- [ ] Monthly review requests
- [ ] Quarterly citation audit
- [ ] Monthly ranking tracking
- [ ] Continuous content updates

---

## Tools & Resources

### Free Tools
- **Google Business Profile**: https://www.google.com/business/
- **Google Search Console**: https://search.google.com/search-console
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Validator**: https://validator.schema.org/
- **Bing Webmaster Tools**: https://www.bing.com/webmasters

### Paid Tools (Optional)
- **BrightLocal** ($29+/month) - Local rank tracking, citation building
- **Whitespark** ($20+/month) - Citation finder, rank tracker
- **Local Falcon** ($30+/month) - Google Maps rank tracking
- **Moz Local** ($129/year) - Citation management

### Romanian Resources
- Camera de Comerț București: https://www.ccib.ro/
- ASE București: https://www.ase.ro/
- Romanian business directories (listed in Citations section)

---

## Troubleshooting

### Common Issues

**Issue: Google Business Profile suspended**
- Solution: Ensure NAP matches exactly across site and GBP
- Verify you have physical presence (if claiming physical location)
- Follow Google's guidelines strictly

**Issue: Not showing in Local Pack**
- Check: Complete GBP profile 100%
- Check: NAP consistency across citations
- Check: Geographic relevance of content
- Check: Review quantity and quality

**Issue: Structured data errors**
- Test with Google Rich Results Test
- Validate required fields are populated
- Ensure proper JSON-LD format
- Check for syntax errors

**Issue: Low local rankings**
- Increase review velocity
- Build more local citations
- Create more location-specific content
- Build local backlinks

---

## Contact for Support

For questions about this implementation:
- Email: contact@lifecore.ro
- Phone: +40 XXX XXX XXX

---

**Last Updated:** 2026-03-02
**Version:** 1.0
**Next Review:** 2026-04-02
