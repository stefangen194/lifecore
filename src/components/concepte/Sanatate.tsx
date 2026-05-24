import ConceptDetailLayout from './ConceptDetailLayout';
import { getConcept } from '../concepteData';

const Sanatate: React.FC = () => <ConceptDetailLayout concept={getConcept('sanatate')} />;

export default Sanatate;
