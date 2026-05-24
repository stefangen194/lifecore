import ConceptDetailLayout from './ConceptDetailLayout';
import { getConcept } from '../concepteData';

const AchizitieCredit: React.FC = () => (
  <ConceptDetailLayout concept={getConcept('achizitie-credit')} />
);

export default AchizitieCredit;
