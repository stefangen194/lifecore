import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  'cine-suntem': 'Cine suntem',
  'contact': 'Contact',
  'concepte': 'Concepte',
  'echipa': 'Echipa',
  'cariera': 'Carieră',
  'out-of-office': 'The Lifestyle',
  'maslow': 'Piramida Bogăției',
  'buget': 'Buget',
  'dobanda-capitalizata': 'Dobândă capitalizată',
  'calculator-credite': 'Calculator credite',
  'calculator-pensie': 'Calculator pensie',
  'calculator-copil': 'Calculator plan copil',
  'inflatie-depreciere': 'Inflație & Depreciere',
  'retragere-activitate': 'Retragere din activitate',
  'plan-copil': 'Plan copil',
  'achizitie-credit': 'Achiziție credit',
  'investitii': 'Investiții',
  'sanatate': 'Sănătate',
  'protectie-bunuri': 'Protecție bunuri',
};

const conceptPages = [
  'retragere-activitate',
  'plan-copil',
  'achizitie-credit',
  'investitii',
  'sanatate',
  'protectie-bunuri',
];

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Acasă', path: '/' }
  ];

  const currentPage = pathnames[pathnames.length - 1];

  if (conceptPages.includes(currentPage)) {
    breadcrumbs.push({ label: 'Concepte', path: '/concepte' });
  }

  pathnames.forEach((segment, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    const label = routeLabels[segment] || segment;

    if (conceptPages.includes(segment)) {
      breadcrumbs.push({ label, path });
    } else if (!conceptPages.includes(currentPage) || index === pathnames.length - 1) {
      breadcrumbs.push({ label, path });
    }
  });

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li
                key={crumb.path}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="text-gray-400 mx-2" size={16} />
                )}
                {isLast ? (
                  <span
                    className="text-gray-600 font-medium flex items-center"
                    itemProp="name"
                    aria-current="page"
                  >
                    {index === 0 && <Home size={16} className="mr-1" />}
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                    itemProp="item"
                  >
                    {index === 0 && <Home size={16} className="mr-1" />}
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
