import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import ComparisonTable from '../components/common/ComparisonTable.jsx';

function Comparison() {
  return (
    <SectionContainer id="comparison">
      <SectionHeader
        eyebrow="Comparison"
        title="How SecureChat compares"
        subtitle="High-level comparison between SecureChat and a typical centralized messaging application."
      />
      <ComparisonTable />
      <p className="mt-4 text-xs text-slate-400">
        This comparison is illustrative. Adjust the table based on the exact
        systems discussed in your project report.
      </p>
    </SectionContainer>
  );
}

export default Comparison;
