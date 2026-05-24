// Canonical data for the six financial concepts — the single source of truth for
// the home grid (ConcepteGrid), the /concepte hub rows, and each detail page.
// Edit copy here; every surface updates.

export interface ConceptData {
  slug: string;
  to: string;
  n: string;
  cat: string;
  /** Full title (detail + hub). */
  title: string;
  /** Shorter title for the home grid card (defaults to `title`). */
  gridTitle?: string;
  /** One-line description for the home grid card. */
  gridDesc: string;
  /** Hero subtitle on the detail page. */
  tagline: string;
  heroImage: string;
  problem: { summary: string; bullets: string[] };
  solution: { heading: string; summary: string; bullets: string[] };
  /** Big "de reținut" figure + its caption. */
  stat: string;
  statLabel: string;
  /** Optional calculator CTA; concepts without one fall back to a contact CTA. */
  calculator?: { label: string; to: string };
}

export const concepts: ConceptData[] = [
  {
    slug: 'retragere-activitate',
    to: '/retragere-activitate',
    n: '01',
    cat: 'Pensie',
    title: 'Retragere din activitate',
    gridDesc: 'Pensia de stat = 20–30% din salariu. Construim împreună restul.',
    tagline: 'Planifică-ți viitorul pentru o pensie sigură și confortabilă.',
    heroImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDd22h2uYsiL9JUCS6RPfmEIjglhrxBnzqwOeQ',
    problem: {
      summary:
        'Pensia de stat nu va fi suficientă pentru a-ți menține stilul de viață actual. Mulți români se vor confrunta cu o scădere drastică a veniturilor la pensionare, fiind nevoiți să-și reducă semnificativ cheltuielile.',
      bullets: [
        'Pensia de stat reprezintă doar 20-30% din salariul actual',
        'Inflația reduce puterea de cumpărare în timp',
        'Cheltuielile medicale cresc odată cu vârsta',
        'Dependența de ajutorul copiilor sau al statului',
      ],
    },
    solution: {
      heading: 'Beneficiile unei planificări corecte',
      summary:
        'O strategie de pensionare bine gândită îți garantează independența financiară și liniștea de a te bucura de anii de după muncă. Îți oferă controlul asupra propriului viitor.',
      bullets: [
        'Menții același nivel de trai după pensionare',
        'Ai libertatea să faci ce îți place fără griji financiare',
        'Ai acoperire pentru cheltuieli medicale neprevăzute',
      ],
    },
    stat: '85%',
    statLabel: 'din români vor avea pensie sub 2.500 lei',
    calculator: { label: 'Calculator pensie', to: '/calculator-pensie' },
  },
  {
    slug: 'plan-copil',
    to: '/plan-copil',
    n: '02',
    cat: 'Familie',
    title: 'Plan copil',
    gridDesc: '18 ani de educație și un start în viață, fără să te îndatorezi.',
    tagline: 'Investește în viitorul copilului tău cu o planificare financiară solidă.',
    heroImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDnL0WBFzMflcOhSIb30JuFDargNvZVPKji5Hp',
    problem: {
      summary:
        'Costurile cu educația și dezvoltarea copilului cresc constant, iar multe familii nu sunt pregătite financiar pentru aceste cheltuieli majore. Părinții ajung să facă compromisuri sau să se îndatoreze.',
      bullets: [
        'Educația privată poate costa zeci de mii de euro',
        'Cursurile și activitățile extracurriculare se scumpesc',
        'Multe familii se îndatorează pentru educația copiilor',
        'Copiii pierd oportunități din cauza limitărilor financiare',
      ],
    },
    solution: {
      heading: 'Beneficiile unei planificări corecte',
      summary:
        'Un plan financiar pentru copil îți oferă siguranța că îi poți oferi cele mai bune oportunități de dezvoltare și educație. Investești în viitorul lui și îi deschizi toate ușile.',
      bullets: [
        'Copilul tău are acces la educația pe care o merită',
        'Nu te îndatorezi pentru nevoile lui de dezvoltare',
        'Ai liniște că poate urma orice cale își dorește',
      ],
    },
    stat: '€45k',
    statLabel: 'costul mediu al unei educații private pe 18 ani',
    calculator: { label: 'Calculator plan copil', to: '/calculator-copil' },
  },
  {
    slug: 'achizitie-credit',
    to: '/achizitie-credit',
    n: '03',
    cat: 'Imobiliare',
    title: 'Achiziție credit și închidere anticipată',
    gridTitle: 'Achiziție credit',
    gridDesc: 'Casa ta, nu a băncii. Rambursări inteligente, anticipate.',
    tagline: 'Învață să gestionezi inteligent creditele și să economisești la dobânzi.',
    heroImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920',
    problem: {
      summary:
        'Creditele pe termen lung te țin legat de bănci pentru decenii, iar dobânzile plătite pot depăși valoarea proprietății. Mulți oameni plătesc pentru casă de 2-3 ori mai mult decât valoarea ei reală.',
      bullets: [
        'Plătești dublu sau triplu față de valoarea reală a casei',
        'Ratele lunare îți limitează flexibilitatea financiară',
        'Riscul de a pierde casa dacă nu poți plăti ratele',
        'Stresul constant al datoriilor pe termen lung',
      ],
    },
    solution: {
      heading: 'Beneficiile unei strategii inteligente',
      summary:
        'O strategie de rambursare anticipată și alegerea creditului potrivit îți poate economisi zeci de mii de euro și îți oferă libertate financiară. Devii cu adevărat proprietar.',
      bullets: [
        'Economisești sume uriașe la dobânzi',
        'Devii proprietar real mai repede',
        'Ai siguranța că casa îți aparține cu adevărat',
      ],
    },
    stat: '−€80k',
    statLabel: 'economie medie prin rambursare anticipată',
    calculator: { label: 'Calculator credite', to: '/calculator-credite' },
  },
  {
    slug: 'investitii',
    to: '/investitii',
    n: '04',
    cat: 'Creștere',
    title: 'Investiții',
    gridDesc: 'Dobânda compusă lucrează 24/7. Chiar și când dormi.',
    tagline: 'Construiește-ți averea prin investiții inteligente și diversificate.',
    heroImage: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1920',
    problem: {
      summary:
        'Banii ținuți doar în conturi de economii pierd valoare din cauza inflației, iar mulți români nu știu cum să-și protejeze și să-și crească averea. Fără investiții inteligente, rămâi în urmă.',
      bullets: [
        'Inflația îți mănâncă economiile în fiecare an',
        'Dobânzile la depozite sunt mai mici decât inflația',
        'Pierzi oportunități de creștere a averii',
        'Dependența doar de un singur venit (salariul)',
      ],
    },
    solution: {
      heading: 'Beneficiile investițiilor inteligente',
      summary:
        'Investițiile corecte îți permit să-ți crești averea în timp și să-ți atingi obiectivele financiare mai repede decât ai crede. Îți construiești o siguranță financiară solidă.',
      bullets: [
        'Banii tăi cresc mai repede decât inflația',
        'Îți construiești independența financiară',
        'Îți diversifici sursele de venit pentru siguranță',
      ],
    },
    stat: '7×',
    statLabel: 'creșterea capitalului la 30 de ani · 7% randament',
    calculator: { label: 'Dobândă capitalizată', to: '/dobanda-capitalizata' },
  },
  {
    slug: 'sanatate',
    to: '/sanatate',
    n: '05',
    cat: 'Protecție',
    title: 'Sănătate',
    gridDesc: 'Asigurări medicale private · acces rapid la îngrijire de calitate.',
    tagline: 'Protejează-ți sănătatea și asigură-te că ai acoperire pentru orice situație.',
    heroImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDR60D3QZFv8HVt2JPNwznkQZLup5B4xcD0MAm',
    problem: {
      summary:
        'Cheltuielile medicale neprevăzute pot deveni o povară financiară uriașă. Sistemul medical de stat este adesea insuficient, iar costurile pentru servicii private pot epuiza rapid economiile.',
      bullets: [
        'Costurile medicale cresc mai repede decât inflația',
        'O boală gravă poate ruina financiar o familie',
        'Listele de așteptare la stat sunt foarte lungi',
        'Multe tratamente moderne nu sunt acoperite de stat',
      ],
    },
    solution: {
      heading: 'Beneficiile unei asigurări de sănătate',
      summary:
        'O asigurare de sănătate completă îți oferă liniștea că tu și familia ta veți primi cele mai bune tratamente fără să vă ruinați financiar. Investești în cel mai important lucru — sănătatea.',
      bullets: [
        'Acces rapid la cele mai bune spitale și medici',
        'Protecție financiară în caz de boală gravă',
        'Controlul sănătății prin investigații preventive',
      ],
    },
    stat: '14 zile',
    statLabel: 'acces la specialist privat vs. 3+ luni la stat',
  },
  {
    slug: 'protectie-bunuri',
    to: '/protectie-bunuri',
    n: '06',
    cat: 'Protecție',
    title: 'Protecție bunuri',
    gridDesc: 'Casa, mașina, veniturile — toate protejate de neprevăzut.',
    tagline: 'Asigură-ți bunurile împotriva riscurilor și ai liniște deplină.',
    heroImage: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920',
    problem: {
      summary:
        'Bunurile pe care le deții reprezintă o investiție importantă, iar pierderea lor din cauza unui incendiu, furt sau alt incident poate avea consecințe financiare devastatoare.',
      bullets: [
        'Un incendiu poate distruge tot ce ai construit',
        'Furturile și vandalizările sunt imprevizibile',
        'Dezastrele naturale pot afecta oricând locuința',
        'Înlocuirea bunurilor fără asigurare te îndatorează',
      ],
    },
    solution: {
      heading: 'Beneficiile protecției bunurilor',
      summary:
        'O asigurare completă pentru bunuri îți oferă siguranța că, indiferent ce se întâmplă, vei putea să-ți reconstruiești viața fără să fie afectate grav economiile tale.',
      bullets: [
        'Protecție completă împotriva riscurilor majore',
        'Înlocuirea rapidă a bunurilor pierdute',
        'Nu îți compromite economiile în caz de accident',
      ],
    },
    stat: '100%',
    statLabel: 'din capitalul tău — protejat',
  },
];

export const getConcept = (slug: string): ConceptData =>
  concepts.find((c) => c.slug === slug) ?? concepts[0];
