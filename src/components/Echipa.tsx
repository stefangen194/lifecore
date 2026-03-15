import React from 'react';
import { Users, Building2, Quote, Award, Target } from 'lucide-react';

const Echipa: React.FC = () => {
  // Collect all team members from all three groups
  const allMembers = [
    // Directori
    {
      name: "Alexandru Sorin Simion",
      quote: "Singura constantă este progresul",
      role: "Director",
      icon: Users,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mD3ShyEfxJXv2CO9PfY6ualImeKViBTnAs4LSq",
    },
    {
      name: "Bebe Dan Olteanu",
      quote: "Build the man who deserves what's important to you!",
      role: "Director",
      icon: Building2,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDz69qp0axlkR4VY17q5A3tZMbsr9vjfhcGC6J",
    },
    // Manageri Executivi
    {
      name: "Ștefănel Genunche",
      quote: "Cel ce cară rezultatele, poate utiliza resursele",
      role: "Manager Executiv",
      icon: Award,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDvIArDCXhRUTdflvZPFNw0k5zxJ8MABaLOj3H",
    },
    {
      name: "Vlad Mihai Șișmanian",
      quote: "Eșecul este doar oportunitatea de a o lua de la capăt, de data aceasta mai inteligent",
      role: "Manager Executiv",
      icon: Target,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDVjed8586F8HifPyuVrohjM3LJCDk5vs1Rgme",
    },
    // Manageri
    {
      name: "Maria Balota",
      quote: "If I can imagine it, I can achieve it",
      role: "Manager",
      icon: Award,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDQMvRMmrAaMEFDThYekNWu3JVymj0BlXKxOPz",
    },
    {
      name: "Daniel Bogdan Cajban",
      quote: "Cel mai bun moment pentru a acționa a fost ieri. Următorul cel mai bun este acum",
      role: "Manager",
      icon: Target,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDjuY46n4kO6s3ELmoKVUcgq2hNbCzGBAfvIZe",
    },
    {
      name: "Diana Cristina Dumitrescu",
      quote: "Bucură-te de ceea ce ai, în timp ce muncești pentru ceea ce îți dorești",
      role: "Manager",
      icon: Users,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDJUfqGxN0GxLOBKhHI7okluYmqfrCcv89UViA",
    },
    {
      name: "Bianca Maria Madin",
      quote: "VENI VIDI VICI 🏆",
      role: "Manager",
      icon: Building2,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mD4ntB0d1RUSqtmoa7W68bCxrZTJuvGkQN3ngI",
    },
    {
      name: "Rym Bianca Naana",
      quote: "Începe cu acțiunea. Povestea se scrie singură",
      role: "Manager",
      icon: Award,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mD64TBxipDbM3iy4sh0WaQH7PmgBCqTJ5KjokS",
    },
    {
      name: "Laura Denisia Negoi",
      quote: "Succesul meu are rădăcini în disciplină și credință",
      role: "Manager",
      icon: Target,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDGjLnbissP3jg2VrtKihIFQRW7zcapebdf6JN",
    },
    {
      name: "Miruna Elena Șișmanian",
      quote: "",
      role: "Manager",
      icon: Users,
    },
    {
      name: "Ionuț Andrei Tabarcea",
      quote: "Drumul spre succes este pavat cu eșecuri",
      role: "Manager",
      icon: Building2,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDNPzKhsJudXhBOZofPKtblmT9Aw04LGJ2SgHs",
    },
    {
      name: "Florin Dragoș Vasile",
      quote: "Diferența dintre vis și realitate este acțiunea",
      role: "Manager",
      icon: Award,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDfUQkmKLs7UYgNbLnTv4Q3WkpuIPBVeHD6mGJ",
    },
    {
      name: "Diana Ioana Ionescu",
      quote: "Evoluția reală începe acolo unde curajul întâlnește responsabilitatea",
      role: "Manager",
      icon: Users,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDWMV4WPwqEZ5eug94mnIbyza2Ux7QMsoJkcPF",
    },
    {
      name: "Bălăiță Nely Ana Maria",
      quote: "Opportunities don't happen, you create them",
      role: "Manager",
      icon: Target,
      photo: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDaXOuOqe3MkYJQOE4K15rStfHBvDxgep8hXLU",
    }
  ];

  // Sort members alphabetically by name
  const sortedMembers = [...allMembers].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-full mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Users className="text-blue-700" size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Echipa Noastră</h1>
          <p className="text-lg text-gray-600">Profesioniștii care conduc compania către succes</p>
        </div>

        {/* Team Members Grid - Alphabetically Sorted */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-full mx-auto px-4">
          {sortedMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative bg-gray-900 p-6 text-white">
                  <div className="relative z-10 flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
                    {/* Profile Picture Placeholder - Portrait Format - Left Side on desktop, top on mobile */}
                    <div className="w-32 h-44 md:w-48 md:h-64 bg-gray-900 rounded-lg flex items-center justify-center border-4 border-gray-700 flex-shrink-0 overflow-hidden">
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <IconComponent className="text-white/80" size={72} />
                      )}
                    </div>
                    {/* Member Info - Right Side on desktop, bottom on mobile */}
                    <div className="flex-1 w-full">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white text-center md:text-left">{member.name}</h3>
                      <p className="text-sm text-white/80 mb-3 text-center md:text-left">{member.role}</p>
                      <div className="flex items-start mb-3 justify-center md:justify-start">
                        <Quote className="text-white mr-2 flex-shrink-0 mt-1" size={20} />
                        <p className="text-white italic text-sm md:text-base flex-1 text-center md:text-left">{member.quote}</p>
                        <Quote className="text-white ml-2 rotate-180 flex-shrink-0 mt-1" size={20} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Echipa;
