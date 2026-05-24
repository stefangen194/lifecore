import { Section, Container, Eyebrow } from './ui';

interface Member {
  name: string;
  quote: string;
  role: string;
  photo?: string;
  // Portfolio figures shown on hover (placeholder values — edit freely).
  plans: number; // planuri financiare create
  clients: number; // clienți activi
  years: number; // ani de experiență
}

const allMembers: Member[] = [
  { name: 'Alexandru Sorin Simion', quote: 'Singura constantă este progresul', role: 'Director', plans: 540, clients: 210, years: 13, photo: '/team/alexandru-sorin-simion.webp' },
  { name: 'Bebe Dan Olteanu', quote: "Build the man who deserves what's important to you!", role: 'Director', plans: 610, clients: 240, years: 14, photo: '/team/bebe-dan-olteanu.webp' },
  { name: 'Ștefănel Genunche', quote: 'Cel ce cară rezultatele, poate utiliza resursele', role: 'Manager Executiv', plans: 380, clients: 160, years: 9, photo: '/team/stefanel-genunche.webp' },
  { name: 'Vlad Mihai Șișmanian', quote: 'Eșecul este doar oportunitatea de a o lua de la capăt, de data aceasta mai inteligent', role: 'Manager Executiv', plans: 350, clients: 145, years: 8, photo: '/team/vlad-mihai-sismanian.webp' },
  { name: 'Maria Balota', quote: 'If I can imagine it, I can achieve it', role: 'Manager', plans: 190, clients: 88, years: 6, photo: '/team/maria-balota.webp' },
  { name: 'Daniel Bogdan Cajban', quote: 'Cel mai bun moment pentru a acționa a fost ieri. Următorul cel mai bun este acum', role: 'Manager', plans: 165, clients: 76, years: 5, photo: '/team/daniel-bogdan-cajban.webp' },
  { name: 'Diana Cristina Dumitrescu', quote: 'Bucură-te de ceea ce ai, în timp ce muncești pentru ceea ce îți dorești', role: 'Manager', plans: 140, clients: 64, years: 5, photo: '/team/diana-cristina-dumitrescu.webp' },
  { name: 'Bianca Maria Madin', quote: 'VENI VIDI VICI 🏆', role: 'Manager', plans: 120, clients: 55, years: 4, photo: '/team/bianca-maria-madin.webp' },
  { name: 'Rym Bianca Naana', quote: 'Începe cu acțiunea. Povestea se scrie singură', role: 'Manager', plans: 110, clients: 48, years: 4, photo: '/team/rym-bianca-naana.webp' },
  { name: 'Laura Denisia Negoi', quote: 'Succesul meu are rădăcini în disciplină și credință', role: 'Manager', plans: 175, clients: 80, years: 6, photo: '/team/laura-denisia-negoi.webp' },
  { name: 'Miruna Elena Șișmanian', quote: '', role: 'Manager', plans: 95, clients: 40, years: 3 },
  { name: 'Ionuț Andrei Tabarcea', quote: 'Drumul spre succes este pavat cu eșecuri', role: 'Manager', plans: 150, clients: 70, years: 5, photo: '/team/ionut-andrei-tabarcea.webp' },
  { name: 'Florin Dragoș Vasile', quote: 'Diferența dintre vis și realitate este acțiunea', role: 'Manager', plans: 200, clients: 92, years: 6, photo: '/team/florin-dragos-vasile.webp' },
  { name: 'Diana Ioana Ionescu', quote: 'Evoluția reală începe acolo unde curajul întâlnește responsabilitatea', role: 'Manager', plans: 130, clients: 60, years: 4, photo: '/team/diana-ioana-ionescu.webp' },
  { name: 'Bălăiță Nely Ana Maria', quote: "Opportunities don't happen, you create them", role: 'Manager', plans: 115, clients: 52, years: 4, photo: '/team/balaita-nely-ana-maria.webp' },
];

const Echipa: React.FC = () => {
  // Sort members alphabetically by name
  const sortedMembers = [...allMembers].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-paper">
      <Section tone="paper-lo" className="pt-12 pb-12 md:pt-16">
        <Container wide>
          <Eyebrow className="mb-6">Cine suntem · Echipa</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl leading-none max-w-[820px]">
            Oamenii din spatele <span className="italic text-gold-700">planurilor</span>.
          </h1>
        </Container>
      </Section>

      <Section tone="paper">
        <Container wide>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sortedMembers.map((member) => {
              const stats = [
                { v: `${member.plans}+`, l: 'planuri create' },
                { v: `${member.clients}`, l: 'clienți activi' },
                { v: `${member.years} ani`, l: 'experiență' },
              ];
              return (
                <div key={member.name} className="group">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4 bg-paper-lo">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="photo-placeholder absolute inset-0" data-label="portret" />
                    )}

                    {/* Hover portfolio overlay */}
                    <div className="absolute inset-0 bg-[rgba(8,8,9,0.97)] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-6">
                      <div className="eyebrow text-gold-500 mb-5">Portofoliu</div>
                      <div className="space-y-4">
                        {stats.map((s) => (
                          <div key={s.l}>
                            <div className="font-display italic text-gold-500 text-3xl leading-none">{s.v}</div>
                            <div className="text-[11px] uppercase tracking-[0.12em] text-[#E6E1D2]/70 mt-1">{s.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl leading-none mb-1">{member.name}</h3>
                  <div className="text-sm text-ink-600">{member.role}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Echipa;
