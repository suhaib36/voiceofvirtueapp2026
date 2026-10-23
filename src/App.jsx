import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/screens/HomeScreen';
import { GetHelpScreen } from './components/screens/GetHelpScreen';
import { GetInvolvedScreen } from './components/screens/GetInvolvedScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { RequestSuccessScreen } from './components/screens/RequestSuccessScreen';
import { HubLocatorModal } from './components/modals/HubLocatorModal';
import { DonationModal } from './components/modals/DonationModal';
import { ScheduleDropoffModal } from './components/modals/ScheduleDropoffModal';
import { InitiativeModal } from './components/modals/InitiativeModal';
import { EventDetailsModal } from './components/modals/EventDetailsModal';
import { AboutHopeModal } from './components/modals/AboutHopeModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { Toast } from './components/Toast';

export function App() {
  const { activeScreen } = useApp();

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'get-help':
        return <GetHelpScreen />;
      case 'get-involved':
        return <GetInvolvedScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'request-success':
        return <RequestSuccessScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF8FD] text-slate-900 flex flex-col">
      {/* Main Responsive Application Surface */}
      <div className="w-full flex-1 flex flex-col max-w-2xl mx-auto bg-[#FAF7FC] relative shadow-xs min-h-screen">
        {/* App Header */}
        <Header />

        {/* Screen Content Area */}
        <main className="flex-1 w-full">
          {renderActiveScreen()}
        </main>

        {/* Docked Bottom Navigation */}
        <BottomNav />
      </div>

      {/* Interactive Global Modals & Drawers */}
      <HubLocatorModal />
      <DonationModal />
      <ScheduleDropoffModal />
      <InitiativeModal />
      <EventDetailsModal />
      <AboutHopeModal />
      <NotificationDrawer />
      <Toast />
    </div>
  );
}

export default App;
