import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/global.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
