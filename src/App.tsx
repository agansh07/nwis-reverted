import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ActiveWell from './pages/ActiveWell';
import NearbyWells from './pages/NearbyWells';
import WellIntelligence from './pages/WellIntelligence';
import RiskMonitor from './pages/RiskMonitor';
import EventExplorer from './pages/EventExplorer';
import DocumentSearch from './pages/DocumentSearch';
import FormationAnalysis from './pages/FormationAnalysis';
import PredictiveAnalytics from './pages/PredictiveAnalytics';
import AIAssistant from './pages/AIAssistant';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/active" element={<ActiveWell />} />
          <Route path="/nearby" element={<NearbyWells />} />
          <Route path="/well/:id" element={<WellIntelligence />} />
          <Route path="/risk" element={<RiskMonitor />} />
          <Route path="/events" element={<EventExplorer />} />
          <Route path="/documents" element={<DocumentSearch />} />
          <Route path="/formation" element={<FormationAnalysis />} />
          <Route path="/predict" element={<PredictiveAnalytics />} />
          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
