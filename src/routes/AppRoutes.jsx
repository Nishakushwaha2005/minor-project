import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home.jsx'));
const Importance = lazy(() => import('../pages/Importance.jsx'));
const Team = lazy(() => import('../pages/Team.jsx'));
const Features = lazy(() => import('../pages/Features.jsx'));
const Uniqueness = lazy(() => import('../pages/Uniqueness.jsx'));
const Comparison = lazy(() => import('../pages/Comparison.jsx'));
const ToolsTech = lazy(() => import('../pages/ToolsTech.jsx'));
const SystemRequirements = lazy(() => import('../pages/SystemRequirements.jsx'));
const Architecture = lazy(() => import('../pages/Architecture.jsx'));
const Snapshots = lazy(() => import('../pages/Snapshots.jsx'));
const Conclusion = lazy(() => import('../pages/Conclusion.jsx'));
const FutureWork = lazy(() => import('../pages/FutureWork.jsx'));

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-[60vh]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/importance" element={<Importance />} />
        <Route path="/team" element={<Team />} />
        <Route path="/features" element={<Features />} />
        <Route path="/uniqueness" element={<Uniqueness />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/tools-tech" element={<ToolsTech />} />
        <Route path="/system-requirements" element={<SystemRequirements />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/snapshots" element={<Snapshots />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/future-work" element={<FutureWork />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
