import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  description: string;
  path: string;
  color?: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({
  links,
  title = "Resurse conexe"
}) => {
  if (links.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`group block p-6 bg-white rounded-xl border-2 border-transparent hover:border-${link.color || 'blue'}-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className={`text-lg font-semibold text-gray-900 mb-2 group-hover:text-${link.color || 'blue'}-600 transition-colors`}>
                  {link.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {link.description}
                </p>
              </div>
              <ArrowRight
                className={`text-${link.color || 'blue'}-400 group-hover:text-${link.color || 'blue'}-600 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0`}
                size={20}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;
