# Internal Linking Strategy - LifeCore

## Site Structure Overview

```
Home (/)
├── Cine suntem (/cine-suntem)
├── Echipa (/echipa)
├── Contact (/contact)
├── Carieră (/cariera)
├── Out of Office (/out-of-office)
├── Concepte (/concepte) [HUB]
│   ├── Retragere din activitate (/retragere-activitate)
│   ├── Plan copil (/plan-copil)
│   ├── Achiziție credit (/achizitie-credit)
│   ├── Investiții (/investitii)
│   ├── Sănătate (/sanatate)
│   └── Protecție bunuri (/protectie-bunuri)
├── Maslow - Piramida Bogăției (/maslow) [HUB]
└── Tools
    ├── Buget (/buget)
    ├── Dobândă capitalizată (/dobanda-capitalizata)
    ├── Calculator credite (/calculator-credite)
    ├── Calculator pensie (/calculator-pensie)
    ├── Calculator plan copil (/calculator-copil)
    └── Inflație & Depreciere (/inflatie-depreciere)
```

## Key Recommendations

### 1. Breadcrumbs Implementation ✅

**Status:** Implemented in `/src/components/Breadcrumbs.tsx`

**Features:**
- Schema.org structured data for SEO
- Automatic parent detection for concept pages
- Accessible navigation with ARIA labels
- Visual hierarchy with icons and separators

**Usage:** Automatically appears on all non-home pages

### 2. Hub & Spoke Model

#### Hub Page: `/concepte`
**Current Status:** ✅ Links to all 6 concept pages

**Recommendation:** Add introductory text with contextual links
```tsx
<p>
  Descoperă cum poți să-ți <Link to="/retragere-activitate">planifici pensia</Link>,
  să-ți <Link to="/plan-copil">asiguri viitorul copiilor</Link>, sau să
  <Link to="/investitii">investești inteligent</Link>.
</p>
```

#### Hub Page: `/maslow`
**Current Status:** ⚠️ Missing links to concept pages

**Recommendation:** Add links in each pyramid level

### 3. Cross-Linking Matrix

#### Priority 1: Calculator → Concept Pages (Missing)

| Calculator Page | Should Link To | Anchor Text Example |
|----------------|----------------|---------------------|
| `/calculator-pensie` | `/retragere-activitate` | "Află mai multe despre planificarea pensiei" |
| `/calculator-copil` | `/plan-copil` | "Descoperă strategii complete pentru planul copilului" |
| `/calculator-credite` | `/achizitie-credit` | "Ghid complet: Achiziție și închidere anticipată" |
| `/dobanda-capitalizata` | `/investitii` | "Strategii de investiții pe termen lung" |

#### Priority 2: Related Concept Cross-Links

| From Page | To Pages | Context |
|-----------|----------|---------|
| `/retragere-activitate` | `/investitii`, `/sanatate` | "Pentru o pensie confortabilă, consideră și investițiile și asigurarea de sănătate" |
| `/plan-copil` | `/investitii`, `/sanatate` | "Educația copilului necesită investiții planificate" |
| `/achizitie-credit` | `/protectie-bunuri` | "Protejează-ți investiția imobiliară" |
| `/investitii` | `/retragere-activitate` | "Investițiile sunt esențiale pentru pensia ta" |
| `/sanatate` | `/protectie-bunuri`, `/retragere-activitate` | "Sănătatea este baza oricărei planificări financiare" |

#### Priority 3: Tool Cross-Links

| From Tool | To Tool | Context |
|-----------|---------|---------|
| `/calculator-pensie` | `/dobanda-capitalizata` | "Calculează randamentul investițiilor pentru pensie" |
| `/calculator-pensie` | `/inflatie-depreciere` | "Vezi cum afectează inflația puterea de cumpărare" |
| `/calculator-copil` | `/dobanda-capitalizata` | "Planifică economiile pentru educație" |
| `/calculator-credite` | `/inflatie-depreciere` | "Impactul inflației asupra creditului" |
| `/buget` | All calculators | "Folosește calculatoarele noastre pentru planificare detaliată" |

### 4. Anchor Text Best Practices

#### DO ✅
- Use descriptive, natural anchor text: "ghid complet pentru planificarea pensiei"
- Vary anchor text for same target page
- Include benefits: "descoperă cum să economisești 30% din credit"
- Use action verbs: "calculează", "descoperă", "află", "explorează"

#### DON'T ❌
- Avoid generic text like: "click aici", "citește mai mult"
- Don't over-optimize with exact match keywords
- Don't use identical anchor text repeatedly
- Avoid anchor text longer than 8-10 words

#### Recommended Anchor Text Variations

**For `/retragere-activitate`:**
- "planificarea pensiei"
- "ghid pentru retragerea din activitate"
- "cum să-ți asiguri o pensie confortabilă"
- "strategii pentru pensia privată"

**For `/calculator-pensie`:**
- "calculatorul de pensie"
- "estimează-ți pensia viitoare"
- "află cât trebuie să economisești"
- "simulează economiile pentru pensie"

**For `/investitii`:**
- "strategii de investiții"
- "cum să investești inteligent"
- "ghid investiții pe termen lung"
- "portofoliu diversificat"

### 5. Link Attributes Best Practices

#### Internal Links - Standard
```tsx
<Link to="/calculator-pensie">Calculator pensie</Link>
```

#### Internal Links - Important CTA
```tsx
<Link
  to="/calculator-pensie"
  className="font-semibold text-blue-600 hover:text-blue-800"
>
  Calculator pensie
</Link>
```

#### External Links (if needed)
```tsx
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  className="external-link"
>
  Resurse externe
</a>
```

### 6. URL Structure - Current Implementation ✅

**Best Practices Applied:**
- Clean, readable URLs (no special characters)
- Lowercase with hyphens for word separation
- Descriptive path names matching content
- Flat structure for better UX (max 2 levels deep)
- Consistent naming conventions

**Examples:**
- ✅ `/calculator-pensie` (clean, descriptive)
- ✅ `/retragere-activitate` (readable, SEO-friendly)
- ✅ `/dobanda-capitalizata` (proper Romanian diacritics handling)

### 7. Implementation Priority

#### Phase 1: High Impact (Implement Now)
1. ✅ Add breadcrumbs to all pages
2. Add RelatedLinks component to calculator pages
3. Add contextual links in Maslow pyramid levels
4. Add cross-links between related concept pages

#### Phase 2: Content Enhancement
1. Add related content sections to each concept page
2. Create "Next Steps" CTAs with relevant links
3. Add footer links to popular calculators
4. Implement "You might also like" sections

#### Phase 3: Advanced
1. Add dynamic "Recently Viewed" links
2. Implement smart recommendations based on user journey
3. Add A/B testing for anchor text variations

### 8. Code Examples

#### Example 1: Adding Related Links to Calculator Page

```tsx
import RelatedLinks from '../RelatedLinks';

// Inside calculator component, after main content:
<RelatedLinks
  links={[
    {
      title: "Ghid Retragere din Activitate",
      description: "Descoperă strategii complete pentru o pensie confortabilă",
      path: "/retragere-activitate",
      color: "blue"
    },
    {
      title: "Calculator Investiții",
      description: "Simulează randamentul investițiilor pentru pensie",
      path: "/dobanda-capitalizata",
      color: "purple"
    }
  ]}
/>
```

#### Example 2: Contextual In-Content Links

```tsx
<p className="text-lg text-gray-700 leading-relaxed">
  Pentru a-ți asigura o pensie confortabilă, este esențial să
  <Link
    to="/retragere-activitate"
    className="text-blue-600 hover:text-blue-800 font-medium mx-1"
  >
    planifici din timp
  </Link>
  și să folosești
  <Link
    to="/dobanda-capitalizata"
    className="text-blue-600 hover:text-blue-800 font-medium mx-1"
  >
    puterea dobânzii compuse
  </Link>
  în avantajul tău.
</p>
```

#### Example 3: Navigation Context Links

```tsx
<div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
  <h4 className="font-semibold text-blue-900 mb-2">Pas următor</h4>
  <p className="text-blue-800 mb-4">
    Acum că știi cât trebuie să economisești, descoperă cum să-ți
    maximizezi economiile prin investiții inteligente.
  </p>
  <Link
    to="/investitii"
    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
  >
    Explorează strategii de investiții
    <ArrowRight className="ml-2" size={16} />
  </Link>
</div>
```

### 9. SEO Benefits

**Expected Improvements:**
1. **Better Crawlability:** Clear site hierarchy helps search engines understand content relationships
2. **Improved PageRank Flow:** Strategic linking distributes authority to important pages
3. **Lower Bounce Rate:** Relevant internal links keep users engaged
4. **More Indexed Pages:** Better internal linking helps search engines discover all pages
5. **Enhanced User Experience:** Easier navigation increases time on site

### 10. Monitoring & Optimization

**Metrics to Track:**
- Click-through rate on internal links
- Pages per session
- Average session duration
- Exit pages
- Most/least linked pages

**Tools:**
- Google Analytics 4: Track internal link clicks
- Google Search Console: Monitor indexed pages
- Heatmap tools: See which links get clicked

### 11. Quick Implementation Checklist

- [x] Breadcrumbs component created
- [x] Breadcrumbs added to all pages
- [x] RelatedLinks component created
- [ ] Add RelatedLinks to calculator pages
- [ ] Add contextual links to Maslow page
- [ ] Add cross-links between concept pages
- [ ] Add "Next Steps" CTAs to concept pages
- [ ] Create link tracking in analytics
- [ ] Document anchor text variations
- [ ] Review and optimize quarterly

## Implementation Guide

### For Calculator Pages

Add this code before the closing `</div>` of each calculator:

```tsx
<RelatedLinks
  title="Resurse recomandate"
  links={[
    // Add 2-3 relevant related pages
  ]}
/>
```

### For Concept Pages

Add this in a prominent section:

```tsx
<div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8 my-12">
  <h3 className="text-2xl font-bold mb-4">Calculează-ți nevoile</h3>
  <p className="text-gray-700 mb-6">
    Folosește calculatorul nostru specializat pentru a afla exact cât trebuie să economisești.
  </p>
  <Link
    to="/calculator-pensie"
    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
  >
    Accesează calculatorul
  </Link>
</div>
```

---

**Last Updated:** 2026-03-02
**Version:** 1.0
**Status:** Breadcrumbs implemented, RelatedLinks ready for integration
