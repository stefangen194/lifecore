import ConceptDetailLayout from './ConceptDetailLayout';
import { getConcept } from '../concepteData';

const ProtectieBunuri: React.FC = () => (
  <ConceptDetailLayout concept={getConcept('protectie-bunuri')} />
);

export default ProtectieBunuri;
