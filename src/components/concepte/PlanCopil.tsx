import ConceptDetailLayout from './ConceptDetailLayout';
import { getConcept } from '../concepteData';

const PlanCopil: React.FC = () => <ConceptDetailLayout concept={getConcept('plan-copil')} />;

export default PlanCopil;
