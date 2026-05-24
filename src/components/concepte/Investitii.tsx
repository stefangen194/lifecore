import ConceptDetailLayout from './ConceptDetailLayout';
import { getConcept } from '../concepteData';

const Investitii: React.FC = () => <ConceptDetailLayout concept={getConcept('investitii')} />;

export default Investitii;
