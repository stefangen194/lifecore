import ConceptDetailLayout from './ConceptDetailLayout';
import { getConcept } from '../concepteData';

const RetragereActivitate: React.FC = () => (
  <ConceptDetailLayout concept={getConcept('retragere-activitate')} />
);

export default RetragereActivitate;
